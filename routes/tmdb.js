const router = require('express').Router()
const TMDBController = require('../controllers/tmdbController')

router.get('/movies', TMDBController.searchMovies)

router.get('/actor', TMDBController.searchActor)

module.exports = router