import { Injectable } from '@angular/core';
import { dummyT1Weapons } from '../dummy-data/items';
import { Observable, of } from 'rxjs';
import { Weapon } from '../types/items';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  dummyT1Weapons = dummyT1Weapons;

  constructor() { }

  getT1Weapons(): Observable<Weapon[]> {
    return of(this.dummyT1Weapons);
  }
}
