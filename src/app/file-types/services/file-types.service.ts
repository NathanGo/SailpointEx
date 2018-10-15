import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

export const ServerPath = 'assets/resources/json-files/server.json';
export const ChildrenPath = 'assets/resources/json-files/';


@Injectable()
export class FileTypesService{
    nodeSelected = new Subject<any>();
    allDeletedFiles = new Subject<any>();
    servers:Array<any>;

    public errorMsg:string = 'Unknown Error';

    
 

    constructor(private httpClient: HttpClient) {}


    getServers(){
      return this.httpClient.get<any>(ServerPath, {
              observe: 'body',
              responseType: 'json'
      })
      .pipe(
        map((data ) => {
            //console.log(data);
            return data;
        })
      )
      
  }


  getChildren(id:number){
   return  this.httpClient.get<any>(ChildrenPath + id + ".json", {
      observe: 'body',
      responseType: 'json'
    })
    .toPromise()
    .catch(this.handleError)
  }

  getFiles(files:Array<any>){
    this.nodeSelected.next(files);
  }

  // get all deleted files 
  getAllDeletedfiles(selectedNode:any){
    let fileList:Array<any>;

    //get servers.json delEted files and send them to subscriber (grid)
    if(this.servers){
      fileList = this.getDeletedFilesPerFolderList(this.servers, selectedNode);
      this.allDeletedFiles.next(fileList);
    }
    
    //get 1,2,3 json delted files and send them to subscriber (grid) asynch with observer -> observable, thats why using Subjects(both of them ) ;
    //sure this loop good only for this issue :)
     for (let index = 1; index <= 3; index++) {
      this.getChildren(index).then(children =>{
        fileList = this.getDeletedFilesPerFolderList(children, selectedNode);
        this.allDeletedFiles.next(fileList);
       
      });
   
    }
  }

  //get deleted files per folder
  getDeletedFilesPerFolderList(folders:any, selectedNode:any){
    if(folders){
      let tempFileList:Array<any> = new Array<any>();
      //let ifSelectedNodeInlcude:number = folders.findIndex(s => s.id == selectedNode.data.id);
   
      folders.forEach(folder => {
        let files:Array<any> = new Array<any>();
        if(folder.id != selectedNode.data.id){
          folder.files.forEach(f => {
            if(f.isDeleted)
              files.push(f) ;
          });
          tempFileList = tempFileList.concat(files);
        }
      });
      return tempFileList;
  }
}
  

   
private handleError(error: any) {
  let errMsg = (error.message) ? error.message :
  error.status ? `${error.status} - ${error.statusText}` : this.errorMsg;
  console.error(error, errMsg); // log to console instead
  return Observable.throw(errMsg);
}
   

}
