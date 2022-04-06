import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FamilyData, FamilyMember } from './family-data.model';
import Two from 'two.js';
import { Vector } from 'two.js/src/vector';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})

export class FamilyTreeComponent implements OnInit {


  two: Two;

  familyTest: FamilyData = {
    familyMembers: [
      {
        name: 'steven',
        parents: ['kevin', 'kathy'],
        id: 3,
        generation: 2
      },
      {
        name: 'courtney',
        parents: ['kevin', 'kathy'],
        id: 4,
        generation: 2
      },
      {
        name: 'kevin',
        spouse: 'kathy',
        id: 1,
        generation: 1
      },
      {
        name: 'kathy',
        spouse: 'kevin',
        id: 2,
        generation: 1
      },
    ]
  };

  @ViewChild("treeDiv") treeDiv?: ElementRef;

  constructor() {
    this.two = new Two({
      type: Two.Types.canvas,
      fullscreen: false,
      fitted: true,
      autostart: true
    })

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.two.appendTo(this.treeDiv?.nativeElement);
    this.setUpTree();
  }

  setUpTree() {

    const nodes = this.two.makeGroup([]);

    this.familyTest.familyMembers.forEach(element => {
      nodes.add(this.createMemberNode(element));
    });

    this.familyTest.familyMembers.forEach(element => {
      this.drawRelationships(element);
    });
  }

  createMemberNode(familyMember: FamilyMember) {
    // const x = this.two.width * 0.5 * Math.random();
    // const y = this.two.height * 0.25 * generation;
    const x = this.two.width * 0.25 * (familyMember.id / familyMember.generation);
    const y = this.two.height * 0.25 * familyMember.generation;
    const width = familyMember.name.length * 10;
    const height = 50;
    const rect = this.two.makeRectangle(0, 0, width, height);
    const text = this.two.makeText(familyMember.name, 0, 0);
    const familyMemberNode = this.two.makeGroup([]);
    familyMemberNode.add(rect, text);
    familyMemberNode.id = familyMember.name;
    familyMemberNode.position = new Vector(x, y);
    return familyMemberNode;
  }

  drawRelationships(familyMember: FamilyMember) {
    this.drawSpouseRelationship(familyMember);
    this.drawParentChildRelationship(familyMember);
  }

  drawParentChildRelationship(familyMember: FamilyMember) {
    const parents = familyMember.parents;
    if (parents) {
      const parent1 = this.two.scene.getById(parents?.pop());
      const parent2 = this.two.scene.getById(parents?.pop());
      const child = this.two.scene.getById(familyMember.name);
      const px = (parent1.position.x + parent2.position.x) / 2; //Calculate the midpoint between the parents
      const py = (parent1.position.y + parent2.position.y) / 2; //Todo: Handle single parent
      const cx = child.position.x
      const cy = child.position.y;

      this.two.makeLine(cx, cy, px, py);
    }

  }

  drawSpouseRelationship(familyMember: FamilyMember) {
    const spouse = familyMember.spouse;
    if (spouse) {
      const parent = this.two.scene.getById(spouse);
      const child = this.two.scene.getById(familyMember.name);
      const px = parent.position.x
      const py = parent.position.y;
      const cx = child.position.x
      const cy = child.position.y;

      this.two.makeLine(cx, cy, px, py);
    }
  }
}
