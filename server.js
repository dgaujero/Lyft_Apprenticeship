const express = require('express');
const app = express();
app.use(express.json({ extended: false }))

const PORT = process.env.PORT || 5000;

app.use('/test', require('./routes/test'))

app.listen(PORT, (req, res) => {
    console.log(`Listening on ${PORT}`)
} )

// Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
// Return a JSON object with the key “return_string” and a string containing every third letter from the original string