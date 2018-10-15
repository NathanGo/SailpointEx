import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule} from 'ngx-bootstrap';

import { SpTreeComponent } from './components/sp-tree/sp-tree.component';
import { SpGridComponent } from './components/sp-grid/sp-grid.component';

    






@NgModule({
  imports: [
    CommonModule,
    TreeModule.forRoot(),
    Ng2TableModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  declarations: [SpTreeComponent, SpGridComponent],
  exports:[
    CommonModule,
    Ng2TableModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SpTreeComponent,
    SpGridComponent]
})
export class SharedModule { }
