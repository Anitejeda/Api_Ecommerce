const { getAll, remove, create } = require('../controllers/productImg.controllers');
const express = require('express');
const upload = require('../utils/multer');
const productImgRouter = express.Router();


productImgRouter.route('/')
    .get(getAll)
    .post(upload.single ('image'), create)

productImgRouter.route('/')
.delete(remove)

module.exports = productImgRouter;