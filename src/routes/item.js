const router = require('express').Router();
const productSchema = require('../data/schemas/product.js');
const config = require('../configs/definitions.json');

router.get('/:id', async (req, res) => {

    const product = await productSchema.findOne({id: req.params?.id});
    
    const query = {
        variant: parseInt(req.query?.variant ?? 0) ?? 0
    };
    if(query.variant > product.variants.length-1) query.variant = 0;

    const data = {
        ...config,
        page: {
            name: product.name,
            description: product.description,
        },
        data: {
            productFound: product ? true : false,
            query: query,
            product: product,
            logged: req.session?.userID
        }
    }
    res.render(config.folders.views + '/item.ejs', data);
});


module.exports = router;