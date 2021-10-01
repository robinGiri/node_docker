const express = require('express')
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');
const postRouter = require('./routes/postRoute')

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('<h2>Namaskar, Welcome to node express Docker</h2>')
})

const reconnectWithMongoDB = () => {
  mongoose
  .connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
  .then(() => console.log('DB connected ...'))
  .catch((e) => {
    console.log(e)
  })
}

reconnectWithMongoDB()

app.listen(port, () => console.log(`we are at port ${port}`))
app.use('/api/v1/posts', postRouter)
