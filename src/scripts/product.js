const productSchema = require("../data/schemas/product.js");

const createProduct = async (obj) => {
    const productData = await productSchema();
    productData = obj;
    await productData.save();
}