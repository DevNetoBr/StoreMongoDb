const mongoose = require('mongoose');

module.exports = {
  connect: () =>{
  mongoose.connect(process.env.DATABASE_URL).then(() => {
      console.log(`[DB] - Conectado`)
    }).catch((err) => {
      console.log(`[DB] - Erro ao conectar`);
      console.error(err)
    });
  }
};