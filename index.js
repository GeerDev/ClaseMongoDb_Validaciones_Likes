const express = require("express");
const app = express();
const PORT = 8080;

const { typeError }= require('./middlewares/errors');
const { dbConnection } = require("./config/config")

app.use(express.json())

dbConnection()

app.use('/products',require('./routes/products'))
app.use('/users',require('./routes/users'))
app.use('/orders',require('./routes/orders'))

app.use(typeError)

app.listen(PORT, console.log(`Server started on port ${PORT}`));