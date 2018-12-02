import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Availability } from '../models/availability.enum';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
  private api = 'api/availability';

  loadAvailability(): Observable<Array<Availability>> {
    return this.http.get<Array<Availability>>(this.api);
  }
  constructor(private http: HttpClient) {}
}
