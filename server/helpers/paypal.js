const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AeNAG8RL045KVqwUKCu0IGpscymTNp_ql2Ac6jNQ7eqAaRf7sTgQEuk39PIp2xvNJVn5wDF5SFBFCP-3",
  client_secret:
    "EEK2rzvBDz-1vecN-jTJRBPyLnHCV3kEFB-hCT5xlt8pg4R-BXayra7BeZThD79y_jWuETmB48X7cKZ9",
});
module.exports = paypal;
