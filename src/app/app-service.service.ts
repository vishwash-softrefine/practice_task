import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  exclusive = new Subject<boolean>();

  constructor() {}
}
