export class SaveOrderService {
    constructor(repository, orderEntity) {
        this.repo = repository;
        this.orderEntity = orderEntity;
    }

    execute() {
        return this.repo.save(this.orderEntity);
    }
}