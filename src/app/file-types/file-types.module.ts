import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FileTypesService } from './services/file-types.service';
import { FileTypesComponent } from './components/file-types/file-types.component';
import { FoldersComponent } from './components/folders/folders.component';
import { FilesComponent } from './components/files/files.component';
import { CommonModule } from '@angular/common';




@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    
  ],
  declarations: [
    FileTypesComponent,
    FoldersComponent,
    FilesComponent,
  ],
  providers: [FileTypesService],
})
export class FileTypesModule { }
