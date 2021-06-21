const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")("sk_test_51J3Oj8SGF67Tv8bmZ0N8kFW3temNLtbZhMEB6TYCdHm6HBLMKAwTK9KCbXjYw116Seluyerw6ZHcaM4RO5x1bxnm00WcHxQb3A")

// Setup an API


// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!! for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // in subunits of the currency
        currency: "inr",
    });  

    // Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

})

// - Listen command
exports.api = functions.https.onRequest(app);