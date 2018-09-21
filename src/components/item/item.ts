class ItemComponent {

}

export const itemComponent = {
    controllerAs: 'vm',
    controller: ItemComponent,
    template: require('./item.html'),
    bindings: {
        data: '=',
        vertical: '='
    }
};