import {SaveOrderFacade} from '../Domain/PaymentOrder/Facade/SaveOrderFacade';

let indexController =  function () {
    let getIndex = function (req, res) {
        let orderEntity = (new SaveOrderFacade()).execute({amount: 12.50, userId: 1});
        console.log(orderEntity);
        res.render('index');
    };

    return {
        getIndex
    };
};

module.exports = indexController;