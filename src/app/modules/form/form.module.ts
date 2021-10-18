import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './component/form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports: []
})
export class FormModule { }
