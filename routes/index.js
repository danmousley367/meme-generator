var express = require('express');
var router = express.Router();
const axios = require('axios')

const options = {
  method: 'GET',
  url: 'https://quotes15.p.rapidapi.com/quotes/random/',
  headers: {
    'X-RapidAPI-Key': '1fdd5b2534msh31b4729c2d5aa0ep1ac531jsnc950213b4a33',
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.request(options)
      .then((response) => {
          console.log(response)
        const quote = response.data.content
        res.render('index', { title: 'Random Meme', quote: quote });
      })

});

module.exports = router;
