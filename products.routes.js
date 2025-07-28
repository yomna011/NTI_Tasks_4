
const productscontrollers = require("../controllers/products.controllers")
const express = require("express");
const router = express.Router();
router.route("/")
.get(productscontrollers.getAllProducts)
.post(productscontrollers.createproduct)

router.route("/:id")
.get(productscontrollers.getproductsbyid)
.put(productscontrollers.updateproduct)
.delete(productscontrollers.deleteproduct)

module.exports = router;