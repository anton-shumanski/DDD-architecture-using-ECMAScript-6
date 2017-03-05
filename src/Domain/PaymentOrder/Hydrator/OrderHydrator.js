import {OrderId} from '../ValueObject/OrderId';
import {OrderUserId} from '../ValueObject/OrderUserId';
import {OrderAmount} from '../ValueObject/OrderAmount';

export class OrderHydrator {
    hydrate(data, orderEntity) {
        if (typeof data.id != 'undefined') {
           orderEntity.id = new OrderId(data.id);
        }

        orderEntity.userId = new OrderUserId(data.userId);
        orderEntity.amount = new OrderAmount(data.amount);

        return orderEntity;
    }
}