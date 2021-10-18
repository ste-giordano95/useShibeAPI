import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  template: `
  {{stringImg}}
  `,
  styles: [
  ]
})
export class GalleryComponent implements OnInit {

  private listImg!: Observable<any>;
  public subs!: Subscription;
  public stringImg: string = "";

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    const type = this.activatedRoute.snapshot.paramMap.get('type');
    const num = this.activatedRoute.snapshot.paramMap.get('num');
    this.getImage(type!, num!);

  }

  private getImage(type: string, num: string) {
    this.listImg = this.httpClient.get<any>(`http://shibe.online/api/${type}?count=${num}&urls=true&httpsUrls=true`)
      .pipe(
        retry(3)
      );

    this.subs = this.listImg.subscribe((data) => this.stringImg = data);
  }

}
