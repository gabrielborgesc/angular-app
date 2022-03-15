import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-title title="title from out"></app-title> -->
    <router-outlet></router-outlet>
    `

})
export class AppComponent implements OnInit{


  constructor() {}

  ngOnInit(): void {
  }

}
