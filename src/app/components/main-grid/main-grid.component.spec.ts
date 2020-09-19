import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { MainGridComponent } from './main-grid.component';

describe('MainGridComponent', () => {
  let component: MainGridComponent;
  let fixture: ComponentFixture<MainGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGridComponent ],
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGridComponent);
    component = fixture.componentInstance;
    component.filterInput = {'launch_year': 2007, 'launch_success': null, 'land_success': null};
    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.filterInput = null;
    component.ngOnChanges();
  });

  it('should call ngOnDestroy', () => {
    const spySpaceResponse = spyOn(component.spaceResponse, 'unsubscribe');
    component.ngOnDestroy();
    expect(spySpaceResponse).toHaveBeenCalled();
  });
});
