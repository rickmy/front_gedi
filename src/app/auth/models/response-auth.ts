import {UserModel} from "@core/models/user/user-model";

export interface ResponseAuth {
  accessToken: string;
  refreshToken: string;
  user: UserModel;
}
