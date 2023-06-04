import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(
    private _messageService: MessageService
  ) { }

  success(message: string) {
    this._messageService.add({severity:'success', summary: 'Éxito', detail: message});
  }
  error(message: string) {
    this._messageService.add({severity:'error', summary: 'Error', detail: message});
  }
  info(message: string) {
    this._messageService.add({severity:'info', summary: 'Información', detail: message});
  }
  warn(message: string) {
    this._messageService.add({severity:'warn', summary: 'Aviso', detail: message});
  }
}
