import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from '../../environment';
import { Observable } from 'rxjs';
import { CharacterClass } from '../../types/class';

@Injectable({
  providedIn: 'root'
})
export class CharacterClassService {
  CLASS_URI = SERVER_URL + '/class';
  ALL_CLASSES_URI = this.CLASS_URI + '/all';

  constructor(private http: HttpClient) { }

  getAllClasses(): Observable<CharacterClass[]> {
    return this.http.get<CharacterClass[]>(this.ALL_CLASSES_URI);
  }
}
