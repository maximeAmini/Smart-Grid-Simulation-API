//imports
var express = require('express')
var clientCtrl = require('./routes/clientCtrl')
var capteurCtrl = require('./routes/capteurCtrl')
var erreursCtrl = require('./routes/erreursCtrl')

exports.router = (function(){
    var apiRouter = express.Router();

    //client root
    apiRouter.route('/client/getAll/').get(clientCtrl.getAll);
    apiRouter.route('/client/getOne/:id_client').get(clientCtrl.getOne);

    //capteurs root
    apiRouter.route('/capteur/getAll/').get(capteurCtrl.getAll);
    apiRouter.route('/capteur/addIndex/').post(capteurCtrl.addIndex);

    //erreurs root
    apiRouter.route('/capteur/addErreur/').post(erreursCtrl.addError);

    return apiRouter;
})(); 