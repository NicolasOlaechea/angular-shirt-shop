import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasContactoComponent } from './camisetas-contacto.component';

describe('CamisetasContactoComponent', () => {
  let component: CamisetasContactoComponent;
  let fixture: ComponentFixture<CamisetasContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisetasContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisetasContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
