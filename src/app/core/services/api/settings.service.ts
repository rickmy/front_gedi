import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {DocumentType} from "@core/models/documents/document-type";
import {UrlPaths} from "@core/helpers/url-paths";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
    private _httpClient: HttpClient,
  ) {
  }

  getTypeDocument(): Observable<DocumentType[]> {
    return this._httpClient.get<DocumentType[]>(UrlPaths.urlTypeDocuments);
  }
}
