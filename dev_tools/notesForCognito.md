# Cognito Notes


## Postman values

After regiter with this values:

{
    "name": "davidgk",
    "email": "davidgk@davidgk.com.ar",
    "password": "aPassword.01"
}

### Registration result

````
{
    "username": "davidgk",
    "pool": {
        "userPoolId": "us-east-1_mFkMyAseu",
        "clientId": "164fb97pgfs6o3u3c3hslapmen",
        "client": {
            "endpoint": "https://cognito-idp.us-east-1.amazonaws.com/",
            "fetchOptions": {}
        },
        "advancedSecurityDataCollectionFlag": true
    },
    "Session": null,
    "client": {
        "endpoint": "https://cognito-idp.us-east-1.amazonaws.com/",
        "fetchOptions": {}
    },
    "signInUserSession": null,
    "authenticationFlowType": "USER_SRP_AUTH",
    "keyPrefix": "CognitoIdentityServiceProvider.164fb97pgfs6o3u3c3hslapmen",
    "userDataKey": "CognitoIdentityServiceProvider.164fb97pgfs6o3u3c3hslapmen.davidgk.userData"
}
````


## Authentication 
email verified
account confirmed:
Both action can be achieved in AWS Cognito Pool Console

### Postman
````
{
    "name": "davidgk",
    "password": "aPassword.01"
}
````


### Result 

```
{
    "idToken": {
        "jwtToken": "eyJraWQiOiJSVThSU0ViYlNNUG02YWpaU3cyM3dSTnJ3OTYrSU1NeHJwUGZQT2Fva2lzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3MjQwNTgzYi1kYzU5LTQ2YTYtOWE0Ny05NzY3OTkzZWQyNWQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfbUZrTXlBc2V1IiwiY29nbml0bzp1c2VybmFtZSI6ImRhdmlkZ2siLCJvcmlnaW5fanRpIjoiZTlkYzMzNmUtNDMyYy00NGVmLThmYTAtNDBhZGU4NWRhMzg0IiwiYXVkIjoiMTY0ZmI5N3BnZnM2bzN1M2MzaHNsYXBtZW4iLCJldmVudF9pZCI6IjQ1Yjc2OWVlLTVhYzYtNGIxYy1iMDk3LWYxYmQyMzBkNGFiYiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjYxMzc3NTQwLCJleHAiOjE2NjEzODExNDAsImlhdCI6MTY2MTM3NzU0MCwianRpIjoiYjhmMjk0M2ItMTZlNC00NDU4LWEwZmQtOWE5NzEwZWFmNjBmIiwiZW1haWwiOiJkYXZpZGdrQGRhdmlkZ2suY29tLmFyIn0.e1PDCrv-OuWN5_coW8P8kLXAQc6sMnDHC6vveuP7lPnK_k7BaRm6nCkPO31pWF9Y8mbHvkUn3suEPDiHjBkS9lpeukkP7YhCctYb_oVlcXC5qCKMHAMLSRsRJhfVYrDoJR-S0P9BVY0TITRSwpufRgLGVQlA7DlLiQ2iVZE4PLrpvMy73cZFWjSEHPkBVR9hncYyZRfeKhAj9GSXxUCPUgXkreQW6eQx3BBreOIHgLd5soLT2-2incW779HSsa0ijHIAksFfP_NFXO4nj-AscbCa3VGRsMiV9Cgpy6_kJuaF98Je0XQMvaokBEVzu9Gb_MgJGDVv6kI1bYNS6PyHNg",
        "payload": {
            "sub": "7240583b-dc59-46a6-9a47-9767993ed25d",
            "email_verified": true,
            "iss": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_mFkMyAseu",
            "cognito:username": "davidgk",
            "origin_jti": "e9dc336e-432c-44ef-8fa0-40ade85da384",
            "aud": "164fb97pgfs6o3u3c3hslapmen",
            "event_id": "45b769ee-5ac6-4b1c-b097-f1bd230d4abb",
            "token_use": "id",
            "auth_time": 1661377540,
            "exp": 1661381140,
            "iat": 1661377540,
            "jti": "b8f2943b-16e4-4458-a0fd-9a9710eaf60f",
            "email": "davidgk@davidgk.com.ar"
        }
    },
    "refreshToken": {
        "token": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.hZIkfI03Ag5CEsZRW5i7rqpamGZocczKYl8bR-UOpn0zf8Yc1uqSzqHjS31Q8nNgMLZgNIDDWpP1lbspoG8OF1R7Soc4ZBQgeWo4OWiyDUEjYh7nLwaPWuDQ_aKxfYIODfhryQfeU93WWpohxDoLolXJawXxJivodCXpUhLlBLwg_hejlm6lGeZ3EwZvMbQBDXQ2BXTqfpceZMv90dHiBF7jXkF2_ColszfFyiS7wEWXWqDwoMcI23fl--5VZ681oCi4ntLB6_nfpa12kbX4Zy7UW-HPqubZakiVR4MUpwii2_9Gm8dOmTLZ9EFzqnWcfxRhD9zzAiCWjaoNRXBiqg.JCrDdECIeg1HDanW.QA0JHYpXH5xJFWh5H0Yzan07XF_ESTNmSnqaA8R7bNc1K--v7Q7nAKb-yVFpOXPyMeD3qyvGTtw4TObP28TnpsN8allCBMwP-6-4LWOTG-tcWo795o7n4SOADnSCT_DUWmKnOqdJPsBQGKGShMrlyjlXu8RxeGSBKjeeiRjvTv1fuXinzQh9hNr-SOLmsROIeoyEYmSl7f7wlKFo4NI7h915oJ3-dYmS2rzkLgmHfQjK_TYK57r5yuZQU4ArtyoggOQehUGEZTUr4rG38yMA7aS_xnsngmvi6bosFNI9lPkmNUC5rkLPlsQ7gI4c6RyPlKM-TM_pDl94d4ev5fNcls6wHRQ_ESk55ipyQTUvetLWipGrAw0L91h6vwgm_OCFHdwATOK1XDKfhnUxzdkfgFt6T8KIFDWA851okOTxyQaZKDAhPJu69zdjvcfEU5Cv_t7e2eTJtZjSJoEQfBQvOIjT0pPDVvTI4cs_Jq5PG4JkifuAY8Ik2dI5uYMQ7ejd9Y4XNnHzNrnH7Q1BEHiOOb35Jm6bkqrQsHjo8QpvXNxUVuEzKbBhHzSkrFnaIbLE-XLAlIiEDPogeHpUgTEcZkWQiHu_371FrKSAnBxAC_TXgTXaIrYWez3GUwmMKkr4dmeMKSOqvprTaYOViIPJwF7eyeHzt6LOQivfUfRGprVfM6d0GceApI_2_le6biRS-abUfDT8VxBYs8QFYFz303dAacNeuqx923JvluD40g8MYHai8AEXuHOXbbVpboGwagPVdUNrhd10JPes6aXipyIzU6oZSFnVAaxz6CFrVb0Ftrq3mABgwxxDItSBiAp5yd5exgAYx-4WOgLgFP5ar3OTjCkouKtzxamHLAHV6qPQdt_e4aCMMyx9LwhrLRGpcInj9ALcb8cF4y-WjhzPqkFvj0VeffIslqNqt9Li68QMUDxDRP8w6mZ2a-8wHVUE9WMnVM7FO24I6LbdhfY6QFeRl81bwQEVd9myktnFM828XB2xlOqpf6tPh7wBw08ASM_TUQbHe3glMjwlZPIgZzixxbpZVnTu8os88NXFyiiknMPCDwoud03BY6U_NAykCf5gK5X-V0owob1QuCB59d6TrH40b7oyLCiGRK8xu_3STZPtHbjT3Wtsvzg5BsAFZZo9hKo3xrayNXZcCU7ko33VJ-4Ja1TYIBQm0gFq4BUS8IFcfCZj4S7e_qeuSlSx93KxPnJX-tCN-f4CPC-PYW4S5DbF8OfvpzB_c1xJwJvPbTewoc7lAD1NhOaZ4fDLY6UFYtKG.eTsEB_i0ifpv4lHCIebI_w"
    },
    "accessToken": {
        "jwtToken": "eyJraWQiOiJkUGt6UUdwZTlcL1JpbkFNZjlDK2hCOFlucjNNcFp5eEZpRDkwWUJtakJyVT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3MjQwNTgzYi1kYzU5LTQ2YTYtOWE0Ny05NzY3OTkzZWQyNWQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9tRmtNeUFzZXUiLCJjbGllbnRfaWQiOiIxNjRmYjk3cGdmczZvM3UzYzNoc2xhcG1lbiIsIm9yaWdpbl9qdGkiOiJlOWRjMzM2ZS00MzJjLTQ0ZWYtOGZhMC00MGFkZTg1ZGEzODQiLCJldmVudF9pZCI6IjQ1Yjc2OWVlLTVhYzYtNGIxYy1iMDk3LWYxYmQyMzBkNGFiYiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NjEzNzc1NDAsImV4cCI6MTY2MTM4MTE0MCwiaWF0IjoxNjYxMzc3NTQwLCJqdGkiOiJhM2RhYTNjYi0zNWQ5LTQyNTYtOWRiZi01YTAwN2U3NjFjNzYiLCJ1c2VybmFtZSI6ImRhdmlkZ2sifQ.xzxhe2-6nR5SI1jQjSIP7BGl29ownGYRMYQs_ehT7AiZwMHv-EmgdDXmBZChukemfrleemoEwU3ZDdShmV0M_RuAGhgGEMiWcCu1_iOx9-jsTb7zBjB-WWp_gI2StNzrzV8uRi_m35C2HscUGs9t0WhlJVVf1mN9PF7Y8EzDIdvD3WYQGxKAOsP9XxDW5uXiGKGYvPFB6hcd1vIAeb8UUrDGp5k54ycEa0jkFnk2hpcT_ekD4cFYttw2uvoC0ZULD9s1RrF_may1HmiWMPqB1LwGDX7i-jJxLrsf0q5iYsNJ1ALsEC3phjZ4uyuZxIRmrZLIEaPfJdLbxkrK6Eplxg",
        "payload": {
            "sub": "7240583b-dc59-46a6-9a47-9767993ed25d",
            "iss": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_mFkMyAseu",
            "client_id": "164fb97pgfs6o3u3c3hslapmen",
            "origin_jti": "e9dc336e-432c-44ef-8fa0-40ade85da384",
            "event_id": "45b769ee-5ac6-4b1c-b097-f1bd230d4abb",
            "token_use": "access",
            "scope": "aws.cognito.signin.user.admin",
            "auth_time": 1661377540,
            "exp": 1661381140,
            "iat": 1661377540,
            "jti": "a3daa3cb-35d9-4256-9dbf-5a007e761c76",
            "username": "davidgk"
        }
    },
    "clockDrift": 0
}
```

Once it obtained: I should get accesstoken.jwtToken and send into the header 
token: <jwtToken>

