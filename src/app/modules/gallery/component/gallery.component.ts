import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  template: `
 
  <img src="{{stringImg.message}}" alt="" class="rounded mx-auto d-block">
 
  `,
  styles: [
  ]
})
export class GalleryComponent implements OnInit {

  private listImg!: Observable<any>;
  public subs!: Subscription;
  public stringImg!: any;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    const type = this.activatedRoute.snapshot.paramMap.get('type');
    this.getImage(type!);

  }

  private getImage(type: string) {
    this.listImg = this.httpClient.get<any>(`https://dog.ceo/api/breed/${type}/images/random`)
      .pipe(
        retry(3)
      );
    this.subs = this.listImg.subscribe((data) => this.stringImg = data);
    this.stringImg = JSON.parse(this.stringImg);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
