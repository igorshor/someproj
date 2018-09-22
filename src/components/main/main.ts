
import * as ui from '@uirouter/angularjs';
import { SuperService } from "../../services/super-service.ts";

class MainComponent {
    public categories: any[];
    constructor(superService: SuperService, private $state: ui.StateService) {
        this.categories = superService.items;
    }

    public goto(id: string) {
        this.$state.go('category', { id })
    }
}

export const mainComponent = {
    controllerAs: 'vm',
    controller: MainComponent,
    template: require('./main.html')
}