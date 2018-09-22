import "./carousel.scss"
const ITEMS_PER_ROW = 4;

class CarouselComponent {
    private items: any[];
    public itemsToShow: any[];
    private _threshold: number;

    set threshold(val: number) {
        this._threshold = val % ITEMS_PER_ROW;
    }

    get threshold(): number {
        return this._threshold;
    }

    constructor(private $anchorScroll: ng.IAnchorScrollService, private $location: ng.ILocationService) {

    }

    public goto(id: string) {
        this.$location.hash('cat' + id);
        this.$anchorScroll()
    }

    $onInit() {
        this.threshold = (this.items.length - ITEMS_PER_ROW) <= 0 ? 0 : Math.floor((this.items.length - ITEMS_PER_ROW) / 2);
        this.setItems()
    }

    //not 100% correct calculation but something like this :P
    private setItems() {
        this.items.forEach((item) => item.shown = false);
        if (this.threshold < 0) {
            this.itemsToShow = [
                ...this.items.slice(0, this.threshold + ITEMS_PER_ROW),
                ...this.items.slice(this.items.length + this.threshold, this.items.length)
            ];
        } else if (this.threshold + ITEMS_PER_ROW > this.items.length) {
            this.itemsToShow = [
                ...this.items.slice(0, ITEMS_PER_ROW - this.threshold),
                ...this.items.slice(this.threshold, this.items.length)
            ];
        } else {
            this.itemsToShow = this.items.slice(this.threshold, this.items.length > ITEMS_PER_ROW ? this.threshold + ITEMS_PER_ROW : this.items.length);
        }

        this.itemsToShow.forEach((item) => item.shown = true);
    }

    public slide(left: boolean) {
        this.threshold = this.threshold + (left ? (-1) : 1);
        this.setItems()
    }

}

export const carouselComponent = {
    controllerAs: 'vm',
    controller: CarouselComponent,
    template: require('./carousel.html'),
    bindings: {
        items: '=',
    }
}