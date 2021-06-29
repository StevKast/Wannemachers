import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyTreeComponent } from './component/family-tree/family-tree.component';
import { HomeComponent } from "./component/home/home.component";
import { PhotoLibraryComponent } from './component/photo-library/photo-library.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'photos',
    component: PhotoLibraryComponent
  },
  {
    path: 'tree',
    component: FamilyTreeComponent
  }, {
    path: '',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
