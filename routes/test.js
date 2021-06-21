// Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
// Return a JSON object with the key “return_string” and a string containing every third letter from the original string
// (e.g.) If you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}.

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { string_to_cut } = req.body;
    let finalString = ''

    for (let i = 0; i < string_to_cut.length; i++) {
        if((i + 1) % 3 === 0){
            finalString += string_to_cut[i];
        }
    }

    res.json(finalString);
})

module.exports = router;
