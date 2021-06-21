// Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
// Return a JSON object with the key “return_string” and a string containing every third letter from the original string
// (e.g.) If you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}.

const express = require('express'); // Bring in express
const router = express.Router();

router.post('/', (req, res) => {
    const { string_to_cut } = req.body; // Deconstruct req.body to access string_to_cut
    let finalString = '' // Define finalString

    for (let i = 0; i < string_to_cut.length; i++) { // Iterate through string_to_cut
        if((i + 1) % 3 === 0){ // Every third iteration, add string_to_cut[i] to finalString
            finalString += string_to_cut[i];
        }
    }

    res.json({"return_string": finalString}); // Send json data to the client
})

module.exports = router;
