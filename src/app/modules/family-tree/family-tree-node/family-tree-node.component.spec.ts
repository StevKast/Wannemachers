import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTreeNodeComponent } from './family-tree-node.component';

describe('FamilyTreeNodeComponent', () => {
  let component: FamilyTreeNodeComponent;
  let fixture: ComponentFixture<FamilyTreeNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyTreeNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
