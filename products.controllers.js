const products = require("../data/products ");
//get all products
const getAllProducts = (req, res) => {
  res.status(200).json(products);
};
//getproduct by id
const getproductsbyid =  (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => {
    return product.id == id;
  });
  if (product) {
    res.status(200).json({ product: product });
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
};
//create product
const createproduct = (req, res) => {
  let body = req.body;
  if (!body.productName || !body.price) { 
    return res.status(400).json({ message: "product name or price is missing" });
  }
  body = { id: products.length + 1, ...body }; 
  products.push(body);
  res.status(201).json({ message: "product added" });
};

const updateproduct =  (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const index = products.findIndex((product) => {
    return product.id == id;
  });

  if (index === -1) {
    return res.status(404).json({ message: "products id not found" });
  }
  products[index] = { ...products[index], ...body };
  return res.status(200).json({ message: "product updated" });
};
//delete product 
const deleteproduct = (req,res)=>{
    const id = req.params.id;
    const index = products.findIndex((product)=>{
        return product.id == id;
    });
    if (index === -1) {
    return res.status(404).json({ message: "products id not found" });
  }
  return res.status(200).json({ message: "product deleted" });
};

module.exports = {
    getAllProducts,
    getproductsbyid,
    createproduct,
    updateproduct,
    deleteproduct

}