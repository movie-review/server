const router = require('express').Router()
const quoteController = require('../controller/quote')



router.get('/', quoteController.getQuotes)
router.get('/movie/:movieTitle', quoteController.getMovieQuote)
router.get('/character/:character', quoteController.getCharacterQuote)
router.get('/qlist', quoteController.qlist)
//query 
//filter => example = /qlist/?filter=funny || /qlist/?filter=keanu+reaves
//type isinya antara tag,atau author => example = /qlist/?type=tag
//misal ingin mencari quotes yang ditulish oleh author keanu reeves maka
// /qlist/?filter=keanu+reeves&type=author

module.exports = router