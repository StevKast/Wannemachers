import { Component, Input, OnInit } from '@angular/core';
import { FamilyTreeData } from '../family-data.model';

@Component({
  selector: 'app-family-tree-node',
  templateUrl: './family-tree-node.component.html',
  styleUrls: ['./family-tree-node.component.scss']
})
export class FamilyTreeNodeComponent implements OnInit {

  @Input() familyNodeDate: FamilyTreeData = {
    member: { name: 'Missing Name', birthDate: 'Missing Birth Date' }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
