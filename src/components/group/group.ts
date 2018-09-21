const ITEMS_PER_ROW = 2;

class GroupComponent {
    private lines: number;
    private header: string;
    private items: any[];
    public itemsToShow: any[];
    public capitalizeHeader: string;

    $onInit() {
        this.itemsToShow = this.items.slice(0, this.lines * ITEMS_PER_ROW);
        this.capitalizeHeader = this.header.toUpperCase();
    }

    private setItemsToShow() {

    }

}

export const groupComponent = {
    controllerAs: 'vm',
    controller: GroupComponent,
    template: require('./group.html'),
    bindings: {
        lines: '=',
        items: '=',
        header: '@'
    }
};