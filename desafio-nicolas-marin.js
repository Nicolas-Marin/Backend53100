class ProductManager {
    constructor(products = []){
        this.products = products;
        this.currentId = 1;
    }

    addProduct(title, description, price, thumbnail, code,stock){
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log("todos los campos son requeridos");
            return;
        }

        if(this.products.some(products => product.code === code)){
            console.log("EL codigo de producto ya se encuentra registrado. Intente con uno diferente")
        }

        const newProduct = {
            id: this.currentId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if(product){
            return product;
        } else {
            console.log("El Id que proporcionaste no existe o no es correcto")
        }
    }

    getProducts() {
        return this.products;
    }
}

const ProductManager = new ProductManager();

console.log(ProductManager.addProduct("laptop","HP Omen i7", "1153500","img-laptop","331200", "3")) //test codigo duplicado
console.log(ProductManager.addProduct("mando","Joystick Xbox para pc")) //test Campos faltantes
console.log(ProductManager.getProductById(1)) //Test Product by ID
console.log(ProductManager.getProducts()) // Test All Productos
console.log(ProductManager.getProductById(5)) //Test Producto inexistente
console.log(ProductManager.addProduct("pc","pc i5", "357800","img-pc","331200", "4")) //test carga completa