const request = require('supertest');
const app = require('../app');
const Category = require('../models/Category');
const ProductsImg = require('../models/ProductsImg');
require('../models');

let token;
let productsId;

beforeAll(async()=>{
    const credentials = {
        email: "testuser@gmail.com",
        password: "testusers1234",
    }
    const res = await request(app).post('/users/login').send(credentials)
    token = res.body.token;
})

test('POST /products should create a product', async () => {
    const category = await Category.create({ name: "technology"});
    const products = {
        title : "Nevera",
        description: "De dos puertas",
        brand: "Nedoca",
        price: "20,0000",
        categoryId: category.id
    }
    const res = await request(app)
    .post('/products')
    .send(products)
    .set('Authorization', `Bearer ${token}`);
    productsId = res.body.id;
    await category.destroy();
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
});

test('GET /products', async () => {
    const res = await request(app).get('/products');
    expect(res.status).toBe(200);

});

test('POST /products/:id/images should set the products images', async () => {
    const imgReq = {
        url: "https://res.cloudinary.com/dprtv7vft/image/upload/v1686066441/e%20commerce%20app/a.jpg",
        publicId: "1", 
    }
    const image = await ProductsImg.create(imgReq)
    const res = await request(app)
        .post(`/products/${productsId}/images`)
        .send(imgReq)
   await image.destroy();
   expect(res.status).toBe(200);
});