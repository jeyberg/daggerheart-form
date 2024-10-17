import { Injectable } from '@angular/core';
import { dummyT1Armor, dummyT1Weapons } from '../dummy-data/items';
import { Observable, of } from 'rxjs';
import { Armor, Weapon } from '../types/items';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  dummyT1Weapons = dummyT1Weapons;
  dummyT1Armor = dummyT1Armor;

  getT1Weapons(): Observable<Weapon[]> {
    return of(this.dummyT1Weapons);
  }

  getT1Armor(): Observable<Armor[]> {
    return of(this.dummyT1Armor);
  }
}
