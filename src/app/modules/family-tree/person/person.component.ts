import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() name = '';
  @Input() birthDate = '';
  @Input() deathDate = '';


  randomSeed = Math.random();

  constructor() { }

  ngOnInit(): void {
  }

}
