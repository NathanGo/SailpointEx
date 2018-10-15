import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { File_Types_Routes } from './file-types/file-types-routing.module';



const appRoutes: Routes = [
  ...File_Types_Routes
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
