const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    Admin_Route = require('./routes/Admin_Route'),
    Products_Route = require('./routes/Products_Route'),
    Stripe_Route = require('./routes/Stripe_Route'),
    Stripe_Email_Route = require('./routes/Stripe_Email_Route'),
    bodyParser = require('body-parser'),
    port = 3001;

// =================== initial settings ===================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// connect to mongo
mongoose.connect('mongodb://127.0.0.1/ecommercedatabase',{ useNewUrlParser: true },()=>{
    console.log('connected to mongodb');
})
mongoose.set('useCreateIndex', true);
// routes
app.use('/products', Products_Route);
app.use('/admin', Admin_Route);
app.use('/stripe',Stripe_Route);
app.use('/email',Stripe_Email_Route)
// Set the server to listen on port 3001
app.listen(3001, () => console.log(`listening on port 3001`))
