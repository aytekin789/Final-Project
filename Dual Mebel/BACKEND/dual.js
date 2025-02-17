const express = require('express'); 
const mongoose = require('mongoose');

const app = express();

const port = 3000;



app.use(express.json())



const productSchema = new mongoose.Schema({

  name: String,

  price: Number,

  image: String

});



const Product = mongoose.model('product_imt', productSchema);





app.get('/', async (req, res) => {

  const data = await Product.find()

  res.send(data)

})





app.get('/:id', async (req, res) => {

  const {id} = req.params

  const data = await Product.findById(id)

  res.send('Hello')

})



app.post('/', async (req, res) => {

  const data = await Product.create(req.body)

  res.send(data)

})



app.put('/', async (req, res) => {

  const {id} = req.params

  const data = await Product.findByIdAndUpdate(id,req.body)

  res.send('Got a PUT request at /user')

})





app.delete('/:id', async (req, res) => {

  const {id} = req.params

  const data = await Product.findByIdAndDelete(id)

  res.send('Got a DELETE request at /user')

})





app.listen(port, () => {

  mongoose.connect('mongodb+srv://aytakinymbp109:aytakin@bp-109.q2j8u.mongodb.net/')

  .then(()=>console.log("Db connected"))

  .catch((err)=>console.log(err))

  console.log(`Example app listening on port ${port}`)

})