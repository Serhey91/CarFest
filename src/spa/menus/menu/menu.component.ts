import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'spa-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService, private screenService: ScreenService) { }

  ngOnInit() {
  }

}
