import './styles.scss';
import '@uirouter/angularjs';
import * as ui from '@uirouter/angularjs';
import * as ng from 'angular';

import { mainComponent } from './components/main/main.ts'
import { SuperService } from './services/super-service.ts';
import { itemComponent } from './components/item/item.ts';
import { groupComponent } from './components/group/group.ts';
import { carouselComponent } from './components/carousel/carousel.ts';
import { categoryComponent } from './components/category/category.ts';

declare global {
    const require: any;
}

export var appName = 'someapp'
const module = ng.module(appName, ['ui.router']);

module.service('superService', SuperService);
module.component('item', itemComponent);
module.component('group', groupComponent);
module.component('carousel', carouselComponent);
module.component('main', mainComponent);
module.component('category', categoryComponent);

module.config(($stateProvider: ui.StateProvider) => {
    var homeState = {
        name: 'home',
        url: '',
        component: 'main'
    }

    var categoryState = {
        name: 'category',
        url: '/category/:id',
        component: 'category'
    }

    $stateProvider.state(categoryState);
    $stateProvider.state(homeState);
    $stateProvider.state
})