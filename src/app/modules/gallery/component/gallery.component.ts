import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-gallery',
  template: `
<ng-container *ngIf="err">
  <p>ERRORE!</p>
</ng-container>

<ng-container *ngFor="let img of listImg$ | async">
  <img src="{{this.img}}" alt="" class="rounded mx-auto d-block"> 
</ng-container>
  


  `,
  styles: [
  ]
})
export class GalleryComponent implements OnInit {

  public listImg$!: Observable<any>;

  public err = false;

  constructor(private activatedRoute: ActivatedRoute, public getDog: DogService) { }

  ngOnInit(): void {
    const type = this.activatedRoute.snapshot.paramMap.get('type');
    const count = this.activatedRoute.snapshot.paramMap.get('count');
    type ? this.listImg$ = this.getDog.getImageDog(type, count!) : this.err = true;

  }
}
