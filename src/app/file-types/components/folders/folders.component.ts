import { Component, OnInit, OnDestroy} from '@angular/core';
import { FileTypesService } from '../../services/file-types.service';
import { TreeNode  } from 'angular-tree-component';
import { Subscription }   from 'rxjs/Subscription';


@Component({
  selector: 'sp-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent implements OnInit, OnDestroy {
  public servers:any;
  public defaultNode:any;
  private subscriptions:Subscription[] = [];
  
  constructor(private fileService: FileTypesService) {}

  options = {
    getChildren: (node:TreeNode) => {
      return  this.fileService.getChildren(node.id);
    }
}

  ngOnInit(){
    this.subscriptions.push(this.fileService.getServers()
      .subscribe(
        (data: any) => {
          this.servers = data;
          this.defaultNode = data[0];
        }
      )
    );
    
    //this.fileService.getServers();
  }


  ngOnDestroy() { 
    // prevent memory leak when component destroyed
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onNodeSelected(selectedNode:TreeNode){
    this.fileService.nodeSelected.next(selectedNode);
  }


}
