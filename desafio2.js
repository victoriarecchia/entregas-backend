
// DESAFIO 2


import fs from 'fs';

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  addProduct(product) {
    const products = this.loadProducts();
    const lastProductId = products.length > 0 ? products[products.length - 1].id : 0;

    let existe = products.find(item => item.id === product.id)
    if (existe) {
      console.log("Error, el codigo esta repetido");
    } else {

    product.id = lastProductId + 1;
    products.push(product);
    this.saveProducts(products);
    console.log(`Producto "${product.title}" agregado correctamente.`);
    }
  }

  getProducts() {
    console.log(this.loadProducts());
  }

  getProductById(id) {
    const products = this.loadProducts();
    const product = products.find(p => p.id === id);
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

  deleteProduct(id) {
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
      fs.writeFileSync(this.path, JSON.stringify(products, null, 2));
    } catch (error) {
      console.log("No se pudo guardar el archivo de productos:", error.message);
    }
  }
}

// PROCESO DE TESTING
// Se creará una instancia de la clase “ProductManager”
const path = './products.json';
const productManager = new ProductManager(path);

// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
productManager.getProducts()

// Se llamará al método “addProduct” con los campos:
let product1 = {
  title: "producto prueba 1",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25
}

// 1)
productManager.addProduct(product1)


//2) Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
productManager.getProducts()

// Se llamará al método “getProductById” y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.
//3)
// productManager.getProductById(1)

// Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
let product2 = {
  title: "producto actualizado",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 30
}

// 4)
// productManager.updateProduct(1, product2)

// 5)
// productManager.getProductById(1)

// Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
// 6)
// productManager.deleteProduct(2)

