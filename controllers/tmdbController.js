const axios = require('axios')
const apikey = `?api_key=${process.env.TMDB_API_KEY}`
axios.defaults.baseURL = `https://api.themoviedb.org/3`


class TMDBController {
    static searchMovies(req, res) {
        axios.get(`/search/movie${apikey}&query=${req.body.title}`)
        .then(({ data }) => {
            if(data.length === 0) {
                // // base url poster: http://image.tmdb.org/t/p/w185/
                res.status(400).json({
                    message: 'Not found'
                })
            } else {
                res.status(200).json(data)
            }
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
    }

    static searchActor(req, res) {
        axios.get(`/search/person${apikey}&query=${req.body.name}`)
        .then(({ data }) => {
            if(data.length === 0) {
                res.status(400).json({
                    message: 'Not found'
                })
            } else {
                res.status(200).json(data)
            }
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
    }
}

module.exports = TMDBController