export interface UserKey {
  id: string;
}

export interface User extends UserKey {
  name: string;
  description: string;
  isAdmin: boolean;
}
