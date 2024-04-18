// DESAFIO 1

// Realizar una clase “ProductManager” que gestione un conjunto de productos.
class ProductManager {
  // Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
  constructor(path) {
    this.products = []
    // this.idCounter = 1;
    this.path = path;
  }

  addProduct = (newProduct) => {
    if (!newProduct.title || !newProduct.description || !newProduct.price || !newProduct.thumbnail || !newProduct.code || !newProduct.stock)
    console.log("Todos los campos son obligatorios");

    let existe = this.products.find(product => product.code === newProduct.code)
    if (existe) {
      console.log("Error, el codigo esta repetido");
    } else {
      // product.id = this.idCounter++;
      newProduct.id = this.products.length + 1
      this.products.push(newProduct)
      console.log(`Producto: "${newProduct.title}" agregado correctamente`);
    }
  }
  getProducts = () => {
    console.log(this.products);
  }

  // Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
  // En caso de no coincidir ningún id, mostrar en consola un error “Not found”
  getProductsById = (id) => {
    let newProduct = this.products.find(product  => product.id === id)
    newProduct ? console.log(newProduct) : console.log("Not found");
  }
}


//  PROCESO DE TESTING

// Se creará una instancia de la clase “ProductManager”
const productManager = new ProductManager();
console.log("-------------------------------------------------------------------------------------------------------")
console.log("Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []");
productManager.getProducts();


console.log("-------------------------------------------------------------------------------------------------------")
console.log("El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE");
productManager.addProduct({
  title: "Producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
})

productManager.getProducts();

console.log("-------------------------------------------------------------------------------------------------------")
console.log("Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.");

productManager.addProduct({
  title: "Producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc1223",
  stock: 25,
})

productManager.getProducts();

// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.log("-------------------------------------------------------------------------------------------------------")
console.log("Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo:");
productManager.getProductsById();
console.log("-------------------------------------------------------------------------------------------------------")




