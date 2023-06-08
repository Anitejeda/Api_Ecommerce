const { getAll, create, getOne, remove, update } = require('../controllers/category.controllers');
const productImg = require('../controllers/productImg.controllers');
const verifyJWT = require('../utils/verifyJWT');
const express = require('express');

const categoryRouter = express.Router();

categoryRouter.route('/')
    .get(getAll)
    .post(verifyJWT, create);

categoryRouter.route('/:id')
    .get(getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

    categoryRouter.route('/:id/images')
    .post(productImg.getAll); 

module.exports = categoryRouter;