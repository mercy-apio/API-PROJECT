
const express = require('express');
const connectDB = require("./db");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

app.get('/', (request, response) => {
    respond.send('Welcome to my backend server!');
});

app.listen(PORT,() => {
    console.log('server is running on http://localhost:${PORT}');
});

//Http methods: GET, PUT, DELETE, PATCH

app.get('/about', (request, respond) => {
    respond.send('This is my contact page');
});

app.get('/about', (request, respond) => {
    respond.send('This is my about page');
});

// Route Parameters
app.get('/user/:id', (request, respond) =>{
    const userId = request.params.id;
    respond.send('User ID is:' + userId);
});

//Query Parameters
app.get('/search', (request, respond) =>{
    const query = request.query.q;
    respond.send('You searched for:' + query);
});

//JSON Response
app.get('/products', (request, respond) => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ];
})

let products = []

//Post Request
app.post('/products', (request, respond) => {

    const newProduct = {
        id: products.length + 1,
        name,
        price,
    }
    products.push(newProduct);

    respond.status(201).json({
        message: "product added",
    })
})



connectDB();