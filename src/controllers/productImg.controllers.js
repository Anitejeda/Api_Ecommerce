const catchError = require('../utils/catchError');
const ProductsImg = require('../models/ProductsImg');
const { uploadToCloudinary } = require('../utils/cloudinary');

const getAll = catchError(async(req, res) => {
   const productsImg = await ProductsImg.findAll(); 
   return res.json(productsImg);
});

const create = catchError(async(req, res) => {
    const { id } = req.params
    const { path, filename } = req.file;
    const { url, public_id } = await uploadToCloudinary(path, filename);
    const image = await ProductsImg.create({ url, publicId: public_id, productId: id });
    return res.status(201).json(image);
});

 const remove = catchError(async(req, res) => {  
    const { id } = req.params;
    const image = await ProductsImg.findByPk(id);
     if(!image) return res.sendStatus(404);
     await deleteFromCloudinary(image.publicId);
     await image.destroy();
     return res.sendStatus(204);
 });

module.exports = {
    getAll,
    create,
    remove
}