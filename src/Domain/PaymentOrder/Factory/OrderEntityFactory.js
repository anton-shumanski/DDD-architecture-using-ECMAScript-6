import {OrderEntity} from '../Entity/OrderEntity';

export class OrderEntityFactory {
    create() {
        return new OrderEntity();
    }
}