import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public filterElementNames: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public filterElementPrice: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public filterElementCategories: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>([]);

  constructor() { }
}
