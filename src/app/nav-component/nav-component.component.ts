import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('', { static: false }) navigationMenu: ElementRef;
  constructor() {}

  ngOnInit() {}

  isMobile() {
    return window.screen.width < 900;
  }

  expandNavbar() {
    
  }
}
