import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileTypesService } from '../../services/file-types.service';
import { TreeNode  } from 'angular-tree-component';
import { Subject, } from 'rxjs';
import { Subscription }   from 'rxjs/Subscription';


@Component({
  selector: 'sp-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})


export class FilesComponent implements OnInit, OnDestroy {
  isDeletedChecked:boolean = false;
  selectedNode:TreeNode;
  fileErrorMsg:string;

  // subscription array, for unsubscribe on OnDestroy implementaion
  private subscriptions:Subscription[] = [];

  //columns for grid/table , could come from db or another source or resource
  public columns:Array<any> = [
    {title: 'Name', name: 'name'},
    {title: 'Type', name: 'type'},
    {title: 'Size', name: 'size'},
    {title: 'IsDeleted', name: 'isDeleted'},
    
  ];

  public data:Array<any>;

  public constructor(private fileTypesService:FileTypesService) {
    this.fileErrorMsg = undefined;
  }

  //checkbox show deleted files event clicked
  public onIsDeletedChecked(isChecked){
    if(isChecked.currentTarget.checked){
      this.data = null;
      this.getFilesIsDeleted();
    }
    else{
       this.data = this.selectedNode.data.files;
    }
  }
 
  private getFilesIsDeleted(){
    this.data = this.selectedNode.data.files;
    this.fileTypesService.allDeletedFiles = new Subject();

    this.subscriptions.push(this.fileTypesService.allDeletedFiles.subscribe(
      (data: any) => {
            
            this.data = this.data.concat(data);
      },
      (error) => {
        this.fileErrorMsg = 'there is system error, please contact support team';
      }
      
    ));

    this.fileTypesService.getAllDeletedfiles(this.selectedNode);
    
  }


    
 

  ngOnInit() {
    this.subscriptions.push(this.fileTypesService.nodeSelected.subscribe(
      (data: any) => {
        //if show deleted files was cheked when folder selected
        if(this.isDeletedChecked){
          this.selectedNode = data.node;
          this.getFilesIsDeleted();
        }
        else{
          this.selectedNode = data.node;
          this.data = data.node.data.files
        }
      }
    ));
  }

  ngOnDestroy() { 
    // prevent memory leak when component destroyed
    this.subscriptions.forEach(s => s.unsubscribe());
  }
  

}


