import { TestBed, async } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule   } from '@angular/router/testing';
import { CommonModule, APP_BASE_HREF} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileTypesModule } from './file-types/file-types.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 

import { File_Types_Routes } from './file-types/file-types-routing.module';
import { AppComponent } from './app.component';



const appRoutes: Routes = [
    ...File_Types_Routes
  ];


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        RouterTestingModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        FileTypesModule,
        AppRoutingModule,
        SharedModule,
        CommonModule,
        
        
      ],
       providers:[
        {provide: APP_BASE_HREF, useValue: '/'}
       ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'SailpointEx'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SailpointEx');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('SailpointEx');
  }));
});
