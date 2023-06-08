const Category = require("./Category");
const Favorite = require("./Favorite");
const Product = require("./Product");
const ProductsImg = require("./ProductsImg");
const User = require("./Users");
const Purchase = require("./Purchase");
const Cart = require("./Cart");

Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(ProductsImg);
ProductsImg.belongsTo(Product);

Product.hasMany(Cart);
Cart.belongsTo(Product);

User.hasMany(Cart);
Cart.belongsTo(User);

Purchase.belongsTo(Product);
Product.hasMany(Purchase);

Purchase.belongsTo(User);
User.hasMany(Purchase);