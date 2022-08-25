import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { promisify } from 'util';
import * as Axios from 'axios';
import * as jsonwebtoken from 'jsonwebtoken';
import * as jwkToPem from 'jwk-to-pem';

@Injectable()
export class AuthenticationHandler {
  private readonly cognitoPoolId: string;
  private readonly cognitoIssuer: string;
  private cacheKeys: MapOfKidToPublicKey | undefined;
  private verifyPromised = promisify(jsonwebtoken.verify.bind(jsonwebtoken));
  constructor(private configService: ConfigService) {
    this.cognitoPoolId = configService.get<string>('AWS_COGNITO_USER_POOL_ID');
    if (!this.cognitoPoolId) {
      throw new Error('env var required for cognito pool');
    }
    this.cognitoIssuer = `https://cognito-idp.us-east-1.amazonaws.com/${this.cognitoPoolId}`;
  }

  async getPublicKeys(): Promise<MapOfKidToPublicKey> {
    if (!this.cacheKeys) {
      const url = `${this.cognitoIssuer}/.well-known/jwks.json`;
      const publicKeys = await Axios.default.get<PublicKeys>(url);
      this.cacheKeys = publicKeys.data.keys.reduce((agg, current) => {
        const pem = jwkToPem(current);
        agg[current.kid] = { instance: current, pem };
        return agg;
      }, {} as MapOfKidToPublicKey);
      return this.cacheKeys;
    } else {
      return this.cacheKeys;
    }
  }

  async handler(request: ClaimVerifyRequest): Promise<ClaimVerifyResult> {
    let result: ClaimVerifyResult;
    try {
      console.log(`user claim verfiy invoked for ${JSON.stringify(request)}`);
      const token = request.token;
      const tokenSections = (token || '').split('.');
      if (tokenSections.length < 2) {
        throw new Error('requested token is invalid');
      }
      const headerJSON = Buffer.from(tokenSections[0], 'base64').toString(
        'utf8',
      );
      const header = JSON.parse(headerJSON) as TokenHeader;
      const keys = await this.getPublicKeys();
      const key = keys[header.kid];
      if (key === undefined) {
        throw new Error('claim made for unknown kid');
      }
      const claim = (await this.verifyPromised(token, key.pem)) as Claim;
      const currentSeconds = Math.floor(new Date().valueOf() / 1000);
      if (currentSeconds > claim.exp || currentSeconds < claim.auth_time) {
        throw new Error('claim is expired or invalid');
      }
      if (claim.iss !== this.cognitoIssuer) {
        throw new Error('claim issuer is invalid');
      }
      if (claim.token_use !== 'access') {
        throw new Error('claim use is not access');
      }
      console.log(`claim confirmed for ${claim.username}`);
      result = {
        userName: claim.username,
        clientId: claim.client_id,
        isValid: true,
      };
    } catch (error) {
      console.error(error);
      result = { userName: '', clientId: '', error, isValid: false };
    }
    return result;
  }
}

export interface ClaimVerifyRequest {
  readonly token?: string;
}

export interface ClaimVerifyResult {
  readonly userName: string;
  readonly clientId: string;
  readonly isValid: boolean;
  readonly error?: any;
}

interface TokenHeader {
  kid: string;
  alg: string;
}
interface PublicKey {
  alg: string;
  e: string;
  kid: string;
  kty: string;
  n: string;
  use: string;
}
interface PublicKeyMeta {
  instance: PublicKey;
  pem: string;
}

interface PublicKeys {
  keys: PublicKey[];
}

interface MapOfKidToPublicKey {
  [key: string]: PublicKeyMeta;
}

interface Claim {
  token_use: string;
  auth_time: number;
  iss: string;
  exp: number;
  username: string;
  client_id: string;
}
