import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent {


@Input()
isCollapsed!:boolean

@Output()
isCollapsedChanged:EventEmitter<boolean>;

constructor(){
  this.isCollapsedChanged=new EventEmitter<boolean>();
}

clicked(){
  this.isCollapsedChanged.emit(!this.isCollapsed)
}

}
