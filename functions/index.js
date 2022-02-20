const functions = require("firebase-functions");

const express = require("express"); // npm i express

const cors = require("cors"); // npm i cors // cross origin resource sharing
const { request, response } = require("express");
const { StreetviewSharp } = require("@mui/icons-material");

const stripe = require("stripe")(
  "sk_test_51KIr1ASBv3Mz30xu1N3V8S8XmBCY2OT6JJqrbLdnOwYi5h1RQaUHjzTq6Ycku4x8YJbveNCJwpxctlimhhrcRWQ10035Led3X9"
); // npm i stripe

// API

// - App config // setting up Express server
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("hello World"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Total payment Receved >> ", total);

  const paymentIntent = await Stripe.paymentIntent.create({
    amount: total, // In paise value not in rupees
    currency: "INR",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client-secret,
  })
});

// - Listen command
exports.api = functions.https.onRequest(app);

// -> In Terminal under functions > firebase emulators:start

// Endpoint
// http://localhost:5001/clone-5cc33/us-central1/api
