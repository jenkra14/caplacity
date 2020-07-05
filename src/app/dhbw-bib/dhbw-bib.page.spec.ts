import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DhbwBibPage } from './dhbw-bib.page';

describe('DhbwBibPage', () => {
  let component: DhbwBibPage;
  let fixture: ComponentFixture<DhbwBibPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhbwBibPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DhbwBibPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
