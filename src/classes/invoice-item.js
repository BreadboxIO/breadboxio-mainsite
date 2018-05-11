export class InvoiceItem {
    constructor(data = {}) {
        this.hours = data.hours || 0;
        this.description = data.description || 'Product maintenance';
        this.rate = data.rate || 100;
    }

    getTotalCost() {
        return this.hours * this.rate;
    }
}
