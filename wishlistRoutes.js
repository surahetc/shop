const routes = require('express').Router();
const wishlistController=require('./controllers/wishlistController')


routes.get('/add/:username/:item',wishlistController.addItems)
routes.get('/view/:username',wishlistController.view)
routes.get('/delete',wishlistController.delete)




module.exports = routes;