const router = require('express').Router()
const TMDBController = require('../controllers/tmdbController')

router.get('/movies/search', TMDBController.searchMovies)

router.get('/movies/latest', TMDBController.getLatestMovie)

router.get('/movies/popular', TMDBController.getPopular)

router.get('/movies/nowplaying', TMDBController.nowPlaying)

router.get('/actor', TMDBController.searchActor)

router.get('/getSession', TMDBController.guestSession)

module.exports = router