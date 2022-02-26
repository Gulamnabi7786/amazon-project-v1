//Backend ...functions/index.js
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51KIr1ASBv3Mz30xu1N3V8S8XmBCY2OT6JJqrbLdnOwYi5h1RQaUHjzTq6Ycku4x8YJbveNCJwpxctlimhhrcRWQ10035Led3X9");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world!!!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
// Example endpoint
// E:\amazon-project-v2\amazon-clone\functions> firebase emulators:start
// http://localhost:5001/project-50331/us-central1/api
