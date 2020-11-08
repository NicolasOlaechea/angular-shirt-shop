import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasAboutComponent } from './camisetas-about.component';

describe('CamisetasAboutComponent', () => {
  let component: CamisetasAboutComponent;
  let fixture: ComponentFixture<CamisetasAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisetasAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisetasAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
