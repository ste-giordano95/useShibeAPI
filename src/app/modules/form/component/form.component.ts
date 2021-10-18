import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  template: `
    <h1>Form</h1>
    <form [formGroup]="animalForm" (ngSubmit)="submit()">
      
        <select class="form-select" formControlName="sel"> 
              <option selected value="cats">Cats</option>
              <option value="birds">Bird</option>
              <option value="shibes">Shibes</option>
        </select>
          <input type="number" class="form-control" formControlName="num">
        <div class="col-12 mt-3">
            <button type="submit"  class="w-100 btn btn-primary btn-lg">Invia</button>
        </div>
    </form>

  `,
  styles: [
  ]
})
export class FormComponent implements OnInit {

  animalForm = new FormGroup({
    sel: new FormControl('', [Validators.required]),
    num: new FormControl('', [Validators.required]),
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.router.navigate(['/gallery', this.animalForm.controls['sel'].value, this.animalForm.controls['num'].value]);
  }

}
