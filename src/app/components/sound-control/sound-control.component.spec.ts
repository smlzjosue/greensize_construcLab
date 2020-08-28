import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoundControlComponent } from './sound-control.component';

describe('SoundControlComponent', () => {
  let component: SoundControlComponent;
  let fixture: ComponentFixture<SoundControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundControlComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoundControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
