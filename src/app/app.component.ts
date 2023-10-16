import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit {
  title = 'bootstrap-template';

  isCollapsed:boolean=false;


  x(y:boolean){
    this.isCollapsed=y
  }

  ngAfterViewInit(): void {
    feather.replace();
  }
}
