﻿import { Component } from '@angular/core';
 
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>TIME:{{myHero:}}</h2>
    `
})
export class AppComponent {
  title = 'CHECK IN TIME:';
  myHero= Date.now();
}