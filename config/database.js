const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

//shortcut to mongoose.conenction object
const db = mongoose.connection

db.on('connected', ()=>{
  console.log(`connected to mongoDB ${db.name} at ${db.host} at ${db.host}:${db.port}`)
})
