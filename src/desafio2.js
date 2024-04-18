
// DESAFIO 2
import fs from 'fs';

export class ProductManager {
  constructor(path) {
    this.path = path;
  }

  addProduct(newProduct) {
    const products = this.loadProducts();

    let existe = products.some(product => product.code === newProduct.code)
    if (existe) {
      console.log(`Error, no se puede agregar el producto "${newProduct.title}" porque el codigo esta repetido`);
    } else {
      newProduct.id = products.length + 1;
      products.push(newProduct);
      this.saveProducts(products);
      console.log(`Producto "${newProduct.title}" agregado correctamente.`);
    }
  }

  async getProducts(limit) {
    const products = await fs.promises.readFile(this.path, 'utf-8');
    const parsedProducts = await JSON.parse(products);
    this.products = parsedProducts;
    return limit === 0 ? parsedProducts : parsedProducts.slice(0, limit);
  }

  getProductById(id) {
    const products = this.loadProducts();
    const product = products.find(p => p.id === +id);
    if (!product) {
      throw new Error("Producto no encontrado.");
    }
    return product;
  }



  updateProduct(id, newData) {
    const products = this.loadProducts();
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
      throw new Error("Producto no encontrado.");
    }
    products[index] = { ...products[index], ...newData };
    this.saveProducts(products);
    console.log(`Producto con id ${id} actualizado.`);
  }

  deleteProductById(id) {
    let products = this.loadProducts();
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
      throw new Error("Producto no encontrado.");
    }
    products = products.filter(p => p.id !== id);
    this.saveProducts(products);
    console.log(`Producto con id ${id} eliminado.`);
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  saveProducts(products) {
    try {
      fs.writeFileSync(this.path, JSON.stringify(products));
    } catch (error) {
      console.log("No se pudo guardar el archivo de productos:", error.message);
    }
  }
}

// PROCESO DE TESTING
// Se creará una instancia de la clase “ProductManager”

const productManager = new ProductManager('./src/products.json');

// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
// productManager.getProducts()

// Se llamará al método “addProduct” con los campos:
// let product1 = {
//   title: "producto 123 ",
//   description: "Este es un producto prueba",
//   price: 200,
//   thumbnail: "Sin imagen",
//   code: "abc123",
//   stock: 25
// }
let product2 = {
  title: "producto2 ",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "345345",
  stock: 25
}
let product3 = {
  title: "producto3 ",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "34534",
  stock: 25
}
let product4 = {
  title: "producto4 ",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "1231232",
  stock: 25
}
let product5 = {
  title: "producto5",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc112323",
  stock: 25
}
let product6 = {
  title: "producto6",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "123423",
  stock: 25
}
let product7 = {
  title: "producto7",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "1234",
  stock: 25
}
let product8 = {
  title: "producto8",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "123",
  stock: 25
}

// productManager.addProduct(product2)
// productManager.addProduct(product3)
// productManager.addProduct(product4)
// productManager.addProduct(product5)
// productManager.addProduct(product6)
// productManager.addProduct(product7)
// productManager.addProduct(product8)
