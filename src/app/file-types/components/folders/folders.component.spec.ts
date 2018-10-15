import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SharedModule } from '../../,./../../shared/shared.module';
import { FileTypesService } from '../../services/file-types.service';
import { FoldersComponent } from '../../components/folders/folders.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';
import { MOCK_DATA } from './models/testData';
import { of } from 'rxjs/observable/of';


describe('FoldersComponent', () => {
  let component: FoldersComponent;
  let fixture: ComponentFixture<FoldersComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FoldersComponent
      ],
      imports: [
        SharedModule,
        CommonModule,
        HttpClientModule,
        

      ],
      providers:[
        FileTypesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //this method compare data of folders(servers) come from service to mock data file 
  // that mock data could be changed to check if unit-test work properly
  // the data 
  it('should be successfully if data equal MockData', async(() => {
    fixture = TestBed.createComponent(FoldersComponent);
    component = fixture.debugElement.componentInstance;
    let filesFoldersService = fixture.debugElement.injector.get(FileTypesService);
    fixture.detectChanges();
    filesFoldersService.getServers().subscribe((data) => {
      expect(data).toEqual(MOCK_DATA);
    });
  }));

  
});
