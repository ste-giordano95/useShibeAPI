import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogService {


  constructor(private httpClient: HttpClient) { }

  public getImageDog(type: string, count: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`http://localhost:4200/api/${type}?count=${count}&urls=true&httpsUrls=true`)
      .pipe(
        retry(3)
      );
  }








}
