const ProductController= require("../controllers/product.controller");

module.exports = app =>{
    app.post("/api/products",ProductController.createNewProduct);


















    
    /*
    app.get("/products",ProductController.findAllProducts);
    
    app.get("/products/:id",ProductController.findOneProduct);
    
    app.patch("/products/:id",ProductController.updateProduct);
    app.delete("/products/:id",ProductController.deleteProduct);
*/
}