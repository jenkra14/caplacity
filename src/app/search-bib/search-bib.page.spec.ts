import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchBibPage } from './search-bib.page';

describe('SearchBibPage', () => {
  let component: SearchBibPage;
  let fixture: ComponentFixture<SearchBibPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBibPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBibPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
