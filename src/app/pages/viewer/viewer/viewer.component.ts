import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, startWith, Subject, takeUntil } from "rxjs";
import { DocumentType, SubTypeDocument } from "@core/models/documents/document-type";
import { SettingsService } from "@core/services/api/settings.service";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { map, switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnDestroy {

  destroy$: Subject<void> = new Subject<void>();
  typeDocuments: DocumentType[] = [];
  subTypeDocuments: SubTypeDocument[] = [];

  myControl = new FormControl<string | DocumentType>('');

  formSearch!: FormGroup;

  constructor(
    private _settingsService: SettingsService,
    private _formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this._getSettings();
    this._buildForm();
  }

  private _buildForm() {
    this.formSearch = this._formBuilder.group({
      typeDocument: [null],
      subTypeDocument: [null],
      codeDocument: [null],
    });
  }

  private _getSettings() {
    this._settingsService.getTypeDocument()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(
        (data: DocumentType[]) => {
          this.typeDocuments = data;
          this.typeDocuments.unshift({ id: null, name: 'Seleccionar', acronym: null, subTypeDocument: [] });
        }
      );
  }

  public loadSubTypeDocuments(typeDocument: DocumentType) {
    console.log(typeDocument);

    this.subTypeDocuments = [];
    if (!typeDocument.id) {
      this.formSearch.get('subTypeDocument')?.setValue(null);
      return;
    }
    console.log(this.typeDocuments.find((item: DocumentType) => item.id === typeDocument.id)!.subTypeDocument!);

    this.subTypeDocuments = [...this.typeDocuments.find((item: DocumentType) => item.id === typeDocument.id)!.subTypeDocument!];
    console.log(this.subTypeDocuments);

    this.subTypeDocuments.unshift({ id: null, name: 'Seleccionar', father: null, acronym: null });
    console.log(this.subTypeDocuments);

  }

  public search() {
    console.log(this.formSearch.value);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
