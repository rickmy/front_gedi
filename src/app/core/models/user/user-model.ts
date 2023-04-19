export interface UserModel {
  id: number;
  username: string;
  userCode: string;
  role: Role;
  email: string;
  state: boolean;
  career?: any;
  name?: any;
  lastName?: any;
  emailVerifiedAt?: any;
}

export interface Role {
  name: string;
  id: number;
}
