import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyTreeComponent } from './family-tree.component';
import { PersonComponent } from './person/person.component';
import { SharedModule } from '../shared';
import { FamilyTreeNodeComponent } from './family-tree-node/family-tree-node.component';



@NgModule({
  declarations: [
    FamilyTreeComponent,
    PersonComponent,
    FamilyTreeNodeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FamilyTreeModule { }
