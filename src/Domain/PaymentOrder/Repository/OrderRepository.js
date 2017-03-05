export class OrderRepository {
    constructor(factory, hydrator, gateway) {
        this.factory = factory;
        this.hydrator = hydrator;
        this.gateway = gateway;
    }

    save(orderEntity) {
        return this.gateway.store(orderEntity);
    }

    find(OrderId) {
        let data = this.gateway.find(OrderId.id);
        return this.hydrateData(data);
    }


    hydrateData(data) {
        if (typeof data == 'undefined' || !data.length) {
            throw new Error('Order not found.');
        }

        return this.hydrator.hydrate(
            data,
            this.factory.create()
        );
    }
}