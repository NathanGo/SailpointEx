# SailpointEx - Sailpoint Exercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Install all dependecies 
run npm install 
using terminal/cmd, from the location there is package.json file

## Explanation of Project

## Dependencies 

    angular-tree-component - I used this package to build the tree component ( I wrapped it with my component "sp-tree" located in Shared folder  )
    ng2-table - I used this package to build the grid component  ( I wrapped it with my component "sp-grid" located in Shared folder  )
    ngx-bootstrap - For using bootstrap features, and it also denedency of ng2-table 

## Structure of Project

## app.component - the main component with  <router-outlet></router-outlet>

## file-types folder contains

## components folder - there is 3 components: 

    file-types.component that split the screen to 2  wrapped two another components (files.component, folder components)
    folder components -  the tree of folders component
    files.component - grid with pagination and checkbox of deleted files (note, pagination appears only if 2 pages exists)
    
    
## services folder - there is service that retrieve the data from source (json files, it could be change to api), 
    there is EventEmmiter, Subject implementaion for Event , Observer/Observable

## shared folder - contains 2 components : 
    sp-grid (using ng2-table with properties ). load children of node async
    sp-tree (using angular-tree-component)
 
 
 
## assets folder - contains  2 folders
    images - folder image , open folder image  for tree creation
    resources - json files 
    

## Unit-Test
    There is unit-tests methods in app.component.spec anf folders.component.spec
    
## Others

    OnDestroy  implementaion for unsibscribe and prevent memory leak 
    OnChanges implementation  for catch chnges of Input in sp-grid.component
    

########################################################################################################################################



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#####################################################################################################################################







