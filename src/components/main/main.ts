import { SuperService } from "../../services/super-service.ts";
class MainComponent {
    public items:any[];
    constructor(superService: SuperService) {
        this.items = superService.items;
    }
}

export const mainComponent = {
    controllerAs: 'vm',
    controller: MainComponent,
    template: require('./main.html')
}