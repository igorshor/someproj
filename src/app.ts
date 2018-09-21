import './styles.scss';

import * as ng from 'angular';
import { mainComponent } from './components/main/main.ts'
import { SuperService } from './services/super-service.ts';
import { itemComponent } from './components/item/item.ts';
import { groupComponent } from './components/group/group.ts';
import { carouselComponent } from './components/carousel/carousel.ts';

declare global {
    const require: any;
}

export var appName = 'someapp'
const module = ng.module(appName, []);

module.service('superService', SuperService);
module.component('item', itemComponent);
module.component('group', groupComponent);
module.component('carousel', carouselComponent);
module.component('main', mainComponent);