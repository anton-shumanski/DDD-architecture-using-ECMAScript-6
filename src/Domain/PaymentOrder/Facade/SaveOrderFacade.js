import {OrderEntityFactory} from '../Factory/OrderEntityFactory';
import {OrderHydrator} from '../Hydrator/OrderHydrator';
import {OrderDatabaseGateway} from '../Gateway/OrderDatabaseGateway';
import {OrderRepository} from '../Repository/OrderRepository';
import {OrderEntity} from '../Entity/OrderEntity';
import {SaveOrderService} from '../Service/SaveOrderService';

export class SaveOrderFacade {
    execute(data) {
        let hydrator = new OrderHydrator();

        let repo = new OrderRepository(
            new OrderEntityFactory(),
            hydrator,
            new OrderDatabaseGateway()
        );

        return (new SaveOrderService(
            repo,
            hydrator.hydrate(data, new OrderEntity())
        )).execute();
    }
}