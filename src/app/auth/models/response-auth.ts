import {UserModel} from "@core/models/user/user-model";

export interface ResponseAuth {
  accessToken: string | null;
  refreshToken: string | null;
  user: UserModel | null;
}
