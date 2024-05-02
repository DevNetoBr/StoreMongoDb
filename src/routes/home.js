const router = require('express').Router();
const productSchema = require('../data/schemas/product.js');
const userSchema = require('../data/schemas/user.js');
const config = require('../configs/definitions.json');

router.get('/', async (req, res) => {

    // const newProduct = new productSchema({
    //     name: "Camisa Stranger",
    //     id: Math.floor(Math.random() *100),
    //     price: 20,
    //     type: "shirt",
    //     description: "Blusa boa",
    //     variants: [{
    //         type: "Black",
    //         size: "M",
    //         stock: 5,
    //         image: ["https://imageswscdn.wslojas.com.br/files/22496/MED_produto-camiseta-stranger-happy-tree-friends-laranja-4218.jpg"]
    //     }]
    // });

    // await newProduct.save();

    const products = await productSchema.find();
    const user = await userSchema.findOne({userID: req.session?.userID});
  
    const data = {
        ...config,
        page: {
            name: "Home",
            description: " ",
        },
        data: {
            products: products,
            user: user,
            logged: req.session?.userID
        }
    }
    res.render(config.folders.views + '/home.ejs', data);
});

module.exports = router;