import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NextPreviusComponent } from './next-previus.component';

describe('NextPreviusComponent', () => {
  let component: NextPreviusComponent;
  let fixture: ComponentFixture<NextPreviusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextPreviusComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NextPreviusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
