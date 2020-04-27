import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from './data-collection.interface';

@Injectable({
  providedIn: 'root'
})
export class DataCollectionService {

  constructor(private httpClient: HttpClient) { }
  getDataset(): Observable<any> {
    return this.httpClient.get('http://api.covid19india.org/data.json');
  }
}
