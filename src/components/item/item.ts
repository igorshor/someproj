import "./item.scss";

class ItemComponent {

}

export const itemComponent = {
    controllerAs: 'vm',
    transclude: true,
    controller: ItemComponent,
    template: require('./item.html'),
    bindings: {
        data: '=',
        vertical: '='
    }
};