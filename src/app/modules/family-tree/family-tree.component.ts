import { Component } from '@angular/core';
import { FamilyTreeData, tempFamilyData } from './family-data.model';


@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})

export class FamilyTreeComponent {

  familyTreeData: FamilyTreeData = tempFamilyData;

  // familyTest: FamilyData = {
  //   familyMembers: [
  //     {
  //       name: 'Steven Kast',
  //       parents: ['kevin', 'kathy'],
  //       id: 3,
  //       generation: 3,
  //       birthDate: 'July 28th 1998'
  //     },
  //     {
  //       name: 'Courtney Kast',
  //       parents: ['kevin', 'kathy'],
  //       id: 4,
  //       generation: 3,
  //       birthDate: 'July 28th 1998'
  //     },
  //     {
  //       name: 'Kevin Kast',
  //       spouse: 'kathy',
  //       parents: ['ray', 'rose'],
  //       id: 1,
  //       generation: 2,
  //       birthDate: 'July 28th 1998'
  //     },
  //     {
  //       name: 'Kathy Kast',
  //       spouse: 'kevin',
  //       id: 2,
  //       generation: 2,
  //       birthDate: 'July 28th 1998'
  //     },
  //     {
  //       name: 'Hannah Caroscio',
  //       id: 7,
  //       generation: 3,
  //       birthDate: 'July 28th 1998'
  //     },
  //   ]
  // };


  constructor() {
  }

}
