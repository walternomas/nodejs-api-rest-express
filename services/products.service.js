const faker = require('faker');
require('dotenv').config();


class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = process.env.PRODUCT_LIMIT;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      });
    }
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(this.products);
      }, 5000);
    });
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
      throw new Error('Product not found');
    } else {
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes
      };
      return this.products[index];
    }
  }

  edit(id, data) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
      return { error: 'Product not found' };
    } else {
      this.products[index] = {
        id,
        ...data
      };
      return this.products[index];
    }
  }

  delete(id) {
    const index = this.products.indexOf(item => item.id === id);
    if(index !== -1) {
      throw new Error('Product not found');
    } else {
      this.products.splice(index, 1);
      return { id };
    }
  }
}

module.exports = ProductsService;
