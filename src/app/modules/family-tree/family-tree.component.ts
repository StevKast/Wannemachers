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
        generation: 3
      },
      {
        name: 'courtney',
        parents: ['kevin', 'kathy'],
        id: 4,
        generation: 3
      },
      {
        name: 'kevin',
        spouse: 'kathy',
        parents: ['ray', 'rose'],
        id: 1,
        generation: 2
      },
      {
        name: 'kathy',
        spouse: 'kevin',
        id: 2,
        generation: 2
      },
      {
        name: 'ray',
        spouse: 'rose',
        id: 5,
        generation: 1
      },
      {
        name: 'rose',
        spouse: 'ray',
        id: 6,
        generation: 1
      },
      {
        name: 'hannah',
        id: 7,
        generation: 3
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

    this.arrangeTree();

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

  arrangeTree() {
    let xPos = 200;
    let yPos = 100;

    const xCount = 4;

    let row = 0;

    this.familyTest.familyMembers.forEach((element, index) => {

      if (index % xCount === 0) {
        row++;
      }

      let x = (xPos * (index % xCount)) + 100;
      let y = (yPos * row) + 100;


      this.two.scene.getById(element.name).position = new Vector(x, y);
      console.log(index + ' ' + element.name + ' ' + x + ' ' + y);
    });

    this.familyTest.familyMembers.filter(fam => fam.generation === 1);

    this.moveNode('steven', 0, 33);

    // this.two.scene.getById('hannah').position = new Vector(50, 100);
    // this.two.scene.getById('steven').position = new Vector(100, 100);
    // this.two.scene.getById('courtney').position = new Vector(150, 100);
  }

  moveNode(nodeId: string, x?: number, y?: number) {
    console.log(x + ' ' + y);
    const currentPos = this.two.scene.getById(nodeId).position;
    this.two.scene.getById(nodeId).position = new Vector(currentPos.x + x, currentPos.y + y);
    console.log();
  }
}
