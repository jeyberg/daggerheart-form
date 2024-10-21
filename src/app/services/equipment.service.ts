import { Injectable } from '@angular/core';
import { dummyT1Armor, dummyT1Weapons } from '../../dummy-data/items';
import { Observable, of } from 'rxjs';
import { Armor, Item, Weapon } from '../../types/items';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  ITEM_URI = SERVER_URL + '/item';
  WEAPON_URI = SERVER_URL + '/weapon/all';
  ARMOR_URI = SERVER_URL + '/armor/all';

  STARTING_ITEMS_URI = this.ITEM_URI + '/starting-items';
  dummyT1Weapons = dummyT1Weapons;
  dummyT1Armor = dummyT1Armor;

  constructor(private http: HttpClient) {}

  getWeaponsByTier(tier: number): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(this.WEAPON_URI, { params: { tier } });
  }

  getArmorByTier(tier: number): Observable<Armor[]> {
    return this.http.get<Armor[]>(this.ARMOR_URI, { params: { tier } });
  }

  getStartingItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.STARTING_ITEMS_URI);
  }
}
