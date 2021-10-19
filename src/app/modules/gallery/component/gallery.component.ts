import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dog } from 'src/app/models/IDog';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-gallery',
  template: `
<ng-container *ngIf="err">
  <p>ERRORE!</p>
</ng-container>
  <img src="{{(this.listImg$ | async).message }}" alt="" class="rounded mx-auto d-block"> 
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
    type ? this.listImg$ = this.getDog.getImageDog(type) : this.err = true;

  }
}
