import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Dog } from '../models/IDog';

@Injectable({
  providedIn: 'root'
})
export class DogService {


  constructor(private httpClient: HttpClient) { }

  public getImageDog(type: string): Observable<Dog> {
    return this.httpClient.get<Dog>(`https://dog.ceo/api/breed/${type}/images/random`)
      .pipe(
        retry(3)
      );
  }








}
