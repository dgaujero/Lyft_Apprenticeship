const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('This route works')
})

app.use('/test', require('./routes/test'))

app.listen(PORT, (req, res) => {
    console.log(`Listening on ${PORT}`)
} )

// Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
// Return a JSON object with the key “return_string” and a string containing every third letter from the original string