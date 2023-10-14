import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEnUS from '@angular/common/locales/es-CO';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    registerLocaleData(localeEnUS);
  }
  title = 'AllShop';


}
