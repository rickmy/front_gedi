import { TestBed } from '@angular/core/testing';

import { ToastrService } from './toastr.service';

describe('ToastService', () => {
  let service: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
