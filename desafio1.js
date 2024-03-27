
// Realizar una clase “ProductManager” que gestione un conjunto de productos.
class ProductManager {
  // Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
  constructor(products = []) {
    this.products = products
    this.idCounter = 1;
  }

  addProduct = (product) => {
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock)
    console.log("Todos los campos son obligatorios");

    let existe = this.products.find(item => item.code === product.code)
    if (existe) {
      console.log("Error, el codigo esta repetido");
    } else {

      product.id = this.idCounter++;
      this.products.push(product)
      console.log(`Producto: "${product.title}" agregado correctamente`);
    }
  }
  getProducts = () => {
    console.log(this.products);
  }

  // Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
  // En caso de no coincidir ningún id, mostrar en consola un error “Not found”
  getProductsById = (id) => {
    let product = this.products.find(item => item.id === id)

    product ? console.log(product) : console.log("Not found");
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
  code: "abc123",
  stock: 25,
})


// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.log("-------------------------------------------------------------------------------------------------------")
console.log("Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo:");
productManager.getProductsById(3);
console.log("-------------------------------------------------------------------------------------------------------")




