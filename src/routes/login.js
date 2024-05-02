// const router = require('express').Router();
// const user = require('../data/schemas/user.js');
// const config = require('../configs/definitions.json');
// const data = {
//     ...config,
//     page: {
//         name: "Login"
//     }
// }
// router.get('/login', async (req, res) => {
//     if(req.session.userID) return res.redirect('/app'); // se der erro coloque em baixo do render
//     res.render(config.folders.views + '/login.ejs', data);
// });

// router.post('/login', async (req, res) => {

//     const userData = req.body;
//     console.log(userData);
// });


// module.exports = router;