import {Injectable} from "@angular/core";
import {Query} from "@datorama/akita";
import {UserModel} from "@core/models/user/user-model";
import {UserStore} from "@core/store/user.store";
import {DocumentModel} from "@core/models/documents/document-model";

@Injectable({
  providedIn: 'root'
})
export class UserQuery extends Query<UserModel>{

  user$ = this.select(state => state);
  constructor(protected  override store: UserStore) {
    super(store);
  }

  getUser(): UserModel {
    return this.getValue();
  }
  getUserNames(): string {
    return this.getValue().name + ' ' + this.getValue().lastName;
  }
  getUserName(): string {
    return this.getValue().username;
  }
  getRole(): string {
    return this.getValue().role.name;
  }
  getDocuments(): DocumentModel[] {
    return this.getValue().Documents;
  }
}
