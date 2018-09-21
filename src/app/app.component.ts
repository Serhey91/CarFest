import { Component } from '@angular/core';
import { SpaConfigService, SpaConfigSettings, Icons } from '../spa/services/spa-config.service';
import { MenuService } from '../spa/services/menu.service';
import { AppMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor( private spaConfigService: SpaConfigService, private menuService: MenuService) {
   const config: SpaConfigSettings = {
     socialIcons: [
       {imageFile: 'src/imgs/facebook.png', alt: 'Facebook', url: 'http://facebook.com'},
       {imageFile: 'src/imgs/instagram.png', alt: 'Instargram', url: 'http://www.instagram.com'},
       {imageFile: 'src/imgs/twitter.png', alt: 'Twitter', url: 'http://twitter.com'},
       {imageFile: 'src/imgs/whatsapp.png', alt: 'WhatsApp', url: 'http://www.whatsapp.com'},
     ],
     showUserControls: true
   };
   spaConfigService.configure(config);
   menuService.items = AppMenuItems;
 }

}
