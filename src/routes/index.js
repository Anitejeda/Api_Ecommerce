const express = require('express');
const userRouter = require('./user.router');
const categoryRouter = require('./category.router');
const productRouter = require('./product.router');
const router = express.Router();
const productImgRouter = require('./productImg.router');
const favoriteRouter = require('./favorite.router');
const purchaseRouter = require('./purchase.router');
const cartRouter = require('./cart.router');

// colocar las rutas aquí
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRouter);
router.use('/product_images', productImgRouter);
router.use('/favorites', favoriteRouter);
router.use('/purchases', purchaseRouter);
router.use('/cart', cartRouter);

module.exports = router;