import { data } from '../data.ts'
export class SuperService {
    items: any[];
    constructor() {
        this.items = data.items;
    }
}