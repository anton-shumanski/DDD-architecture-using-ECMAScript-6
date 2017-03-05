export class OrderEntity {
    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get userId() {
        return this._userId;
    }

    set userId(userId) {
        this._userId = userId;
    }

    get amount() {
        return this._amount;
    }

    set amount(amount) {
        this._amount = amount;
    }
}