import {DocumentModel} from "@core/models/documents/document-model";

export interface UserModel {
  id: number;
  userCode: string;
  username: string;
  name?: any;
  lastName?: any;
  email: string;
  emailVerifiedAt?: any;
  state: boolean;
  roleId: number;
  careerId?: number;
  role: Role;
  career?: any;
  Documents: DocumentModel[]
}
export interface Role {
  id: number;
  name: string;
}
