import { Routes, RouterModule }  from '@angular/router';
import { FileTypesComponent } from './components/file-types/file-types.component';
import { FoldersComponent } from './components/folders/folders.component';
import { FilesComponent } from './components/files/files.component';


export const File_Types_Routes: Routes = [
    { path: '', redirectTo: '/file-types', pathMatch: 'full' },
    { path: 'file-types', component: FileTypesComponent, children: [
      { path: '', component: FoldersComponent },
      { path: 'new', component: FilesComponent },
     ]},
];

export const fileTypesRoutes = RouterModule.forChild(File_Types_Routes);