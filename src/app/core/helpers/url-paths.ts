import {environment} from "@environments/environment";

export class UrlPaths {
  static readonly urlBase = environment.api_url;
  static readonly urlBaseAuth = this.urlBase + '/auth';
  static readonly urlSettings = this.urlBase + '/settings';
  static readonly urlTypeDocuments = this.urlBase + '/document-type';
}
