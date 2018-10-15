import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TreeNode, ITreeOptions, TreeComponent } from 'angular-tree-component';



@Component({
  selector: 'sp-tree',
  templateUrl: './sp-tree.component.html',
  styleUrls: ['./sp-tree.component.scss']
})
export class SpTreeComponent implements OnInit {
  //it possible more inputs properties on demand, like number of rows per page, styles for table  and etc...
  @Input() nodes:TreeNode[];
  @Input() options:ITreeOptions;

  
  @Output() nodeSelected = new EventEmitter<TreeNode>();

  @ViewChild('tree')
    tree : TreeComponent;

  constructor() { }

  ngOnInit() {
  }

  nodeActivated(selectedNode:TreeNode){
    //emit event  to subscriber
    this.nodeSelected.emit(selectedNode);
    //expand selected folder(node)
    this.tree.treeModel.getActiveNode().expand();
    
  }

  //select the first root by default 
  activateFirstNode() {
    setTimeout(() => {
      this.tree.treeModel.getFirstRoot().toggleActivated();
      this.tree.treeModel.getFirstRoot().expand();
    }, 500);
  }

}
