import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SingletonFilter } from '../models/SingletonFilter';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public singletonFilter: BehaviorSubject<SingletonFilter> = new BehaviorSubject<SingletonFilter>(null);

  constructor() { }
}
