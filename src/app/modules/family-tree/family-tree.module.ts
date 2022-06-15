import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyTreeComponent } from './family-tree.component';
import { PersonComponent } from './person/person.component';



@NgModule({
  declarations: [
    FamilyTreeComponent,
    PersonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FamilyTreeModule { }
