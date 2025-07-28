const express = require("express");
 const productRouter = require("./routes/products.routes")
const app = express();
const PORT = 3000;
 
// let products = [
//   { id: 1, productName: "product_1", price: 1000 },
//   { id: 2, productName: "product_2", price: 2000 },
//   { id: 3, productName: "product_3", price: 3000 },
// ];
 
// app.use(express.json()); 
 
// // get all products
// app.get("/products", (req, res) => {
//   res.status(200).json(products);
// });
 
// // get product by id
// app.get("/products/:id", (req, res) => {
//   const id = req.params.id;
//   const product = products.find((product) => {
//     return product.id == id;
//   });
//   if (product) {
//     res.status(200).json({ product: product });
//   } else {
//     res.status(404).json({ message: "Product Not Found" });
//   }
// });
 
// app.post("/products", (req, res) => {
//   let body = req.body;
//   if (!body.productName || !body.price) { 
//     return res.status(400).json({ message: "product name or price is missing" });
//   }
//   body = { id: products.length + 1, ...body }; 
//   products.push(body);
//   res.status(201).json({ message: "product added" });
// });
 
// // update product
// app.put("/products/:id", (req, res) => {
//   const id = req.params.id;
//   const body = req.body;
//   const index = products.findIndex((product) => {
//     return product.id == id;
//   });

//   if (index === -1) {
//     return res.status(404).json({ message: "products id not found" });
//   }
//   products[index] = { ...products[index], ...body };
//   return res.status(200).json({ message: "product updated" });
// });
//  //delete product
//  app.delete("/products/:id", (req,res)=>{
//     const id = req.params.id;
//     const index = products.findIndex((product)=>{
//         return product.id == id;
//     });
//     if (index === -1) {
//     return res.status(404).json({ message: "products id not found" });
//   }
//   return res.status(200).json({ message: "product deleted" });
// });
 app.use(express.json());
 app.use("/products", productRouter);
app.listen(PORT, () => {
  console.log("Server is running at port", PORT);
});
