import "./group.scss"

const ITEMS_PER_ROW = 2;

class GroupComponent {
    private lines: number;
    private category: any;
    public itemsToShow: any[];
    public capitalizeHeader: string;
    public id:string;

    $onInit() {
        this.itemsToShow = this.lines ? this.category.items.slice(0, this.lines * ITEMS_PER_ROW) : this.category.items;
        this.id = this.category.id;
        this.capitalizeHeader = this.category.header.toUpperCase();
    }

    public cl(){
        this.id;
        
    }
}

export const groupComponent = {
    controllerAs: 'vm',
    controller: GroupComponent,
    template: require('./group.html'),
    bindings: {
        showAll: '=?',
        lines: '=',
        category: '=',
        onShowAll: '&',
        theme: '@'
    }
};