export class OrderAmount {
    constructor(amount) {
        this._amount = amount;
    }

    get amount() {
        return this._amount;
    }
}