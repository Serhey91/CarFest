import {MenuItem} from '../spa/services/menu.service';
export const AppMenuItems: Array<MenuItem> = [
    {text: 'Cars',
icon: 'src/imgs/car.png',
route: '/cars',
submenu: null},
{text: 'Maintenance',
icon: 'src/imgs/settings.png',
route: '/settings',
submenu: null},
{text: 'Home',
icon: 'src/imgs/home.png',
route: '/home',
submenu: null},
]