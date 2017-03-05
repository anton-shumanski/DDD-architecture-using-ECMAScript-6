let express =  require('express');
let router = express.Router();

let index = function () {
    let indexController = require('../Controllers/IndexController');
    router.route('/')
        .get(indexController().getIndex);

    return router;
};

module.exports = index;