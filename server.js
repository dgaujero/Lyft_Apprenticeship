const express = require('express'); // Bring in express
const app = express(); // Create express application and initialize it to 'app'
app.use(express.json({ extended: false })) // Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.

const PORT = 5000;

// use /test route to accept a POST request 
app.use('/test', require('./routes/test'))

// Listen on port 5000
app.listen(PORT, (req, res) => {
    console.log(`Listening on ${PORT}`)
} )
