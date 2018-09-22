import { SuperService } from "../../services/super-service.ts";
import * as ui from '@uirouter/angularjs';

class CategoryComponent {
    public category: any;
    public header: string;

    constructor(superService: SuperService, $stateParams: ui.StateParams) {
        const category = superService.items.find((item: any) => item.id === $stateParams.id)

        if (category) {
            this.category = category;
        } else {
            //error
        }


    }
}

export const categoryComponent = {
    controllerAs: 'vm',
    controller: CategoryComponent,
    template: require('./category.html')
}