import {environment} from "@environments/environment";

export class UrlPaths {
  static readonly urlBase = environment.api_url;
  static readonly urlBaseAuth = this.urlBase + '/auth';

}
