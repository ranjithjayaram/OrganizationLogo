import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgimageComponent } from './orgimage.component';

describe('OrgimageComponent', () => {
  let component: OrgimageComponent;
  let fixture: ComponentFixture<OrgimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
