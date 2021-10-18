import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './modules/form/component/form.component';
import { GalleryComponent } from './modules/gallery/component/gallery.component';

const routes: Routes = [
  { path: 'home', component: FormComponent },
  {
    path: 'gallery/:type/:num',
    loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule), component: GalleryComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
