import {UrlPaths} from "@core/helpers/url-paths";

export class UrlAuth {
  public static readonly urlAuth = UrlPaths.urlBaseAuth;
  public static readonly urlLogin = UrlAuth.urlAuth + '/login';
  public static readonly urlRegister = UrlAuth.urlAuth + '/register';
  public static readonly urlConfirmEmail = UrlAuth.urlAuth + '/confirm-email';
  public static readonly urlForgetPassword = UrlAuth.urlAuth + '/forget-password';
  public static readonly urlResetPassword = UrlAuth.urlAuth + '/reset-password';

}
