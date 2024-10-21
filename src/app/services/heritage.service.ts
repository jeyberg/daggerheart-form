import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from '../../environment';
import { Observable } from 'rxjs';
import { Ancestry, Community } from '../../types/heritage';

@Injectable({
  providedIn: 'root'
})
export class HeritageService {
  ANCESTRY_URI = SERVER_URL + '/ancestry';
  COMMUNITY_URI = SERVER_URL + '/community';
  ALL_ANCESTRIES_URI = this.ANCESTRY_URI + '/all';
  ALL_COMMUNITIES_URI = this.COMMUNITY_URI + '/all';

  constructor(private http: HttpClient) { }

  getAllAncestries(): Observable<Ancestry[]> {
    return this.http.get<Ancestry[]>(this.ALL_ANCESTRIES_URI);
  }

  getAllCommunities(): Observable<Community[]> {
    return this.http.get<Community[]>(this.ALL_COMMUNITIES_URI);
  }
}
