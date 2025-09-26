import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from '../../environment';
import { Observable } from 'rxjs';
import { DomainCard } from '../../types/domain-card.type';

@Injectable({
  providedIn: 'root'
})
export class DomainCardService {
  DOMAIN_CARD_URL = SERVER_URL + '/domain-card';
  ALL_DOMAIN_CARDS_URI = this.DOMAIN_CARD_URL + '/all';

  constructor(private http: HttpClient) { }

  getDomainCardsByLevel(level: number): Observable<DomainCard[]> {
    return this.http.get<DomainCard[]>(this.ALL_DOMAIN_CARDS_URI, { params: { level }});
  }
}
