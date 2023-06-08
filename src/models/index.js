const Category = require("./Category");
const Favorite = require("./Favorite");
const Product = require("./Product");
const ProductsImg = require("./ProductsImg");
const User = require("./Users");

Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(ProductsImg);
ProductsImg.belongsTo(Product);

Product.hasMany(Favorite);
Favorite.belongsTo(Product);

User.hasMany(Favorite);
Favorite.belongsTo(User);