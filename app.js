const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

const port = 3000

const api_url = process.env.API_URL
const db_name = process.env.DB_NAME
const db_user = process.env.DB_USER
const db_pwd = process.env.DB_PWD

app.use(cors());
app.options('*', cors())

//Middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use(errorHandler);

//Routes
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');

app.use(`${api_url}/categories`, categoriesRoutes);
app.use(`${api_url}/products`, productsRoutes);
app.use(`${api_url}/users`, usersRoutes);
app.use(`${api_url}/orders`, ordersRoutes);

//Database
mongoose.connect(
    `mongodb+srv://${db_user}:${db_pwd}@trainingcluster.tp5ry.mongodb.net/${db_name}?retryWrites=true&w=majority`,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})

//Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
