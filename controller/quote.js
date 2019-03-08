const axios = require('axios')

module.exports = {
    getQuotes: (req, res) => {
        axios({
            url: `http://movie-quotes-app.herokuapp.com/api/v1/quotes?page=1`,
            method: 'get',
            headers: {
                Authorization: `Token token=RYdAnLDUYR6n4apOwnFTRwtt`
            }
        })
            .then(({ data }) => {
                // console.log(quotes)
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'error!' })
            })
    },
    getMovieQuote: (req, res) => {
        axios({
            url: `http://movie-quotes-app.herokuapp.com/api/v1/quotes?movie=${req.params.movieTitle}`,
            method: 'get',
            headers: {
                Authorization: `Token token=RYdAnLDUYR6n4apOwnFTRwtt`
            }
        })
            .then(({ data }) => {
                // console.log(quotes)
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'error!' })
            })
    },
    getCharacterQuote: (req, res) => {
        axios({
            url: `http://movie-quotes-app.herokuapp.com/api/v1/quotes?character=${req.params.character}`,
            method: 'get',
            headers: {
                Authorization: `Token token=RYdAnLDUYR6n4apOwnFTRwtt`
            }
        })
            .then(({ data }) => {
                // console.log(quotes)
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'error!' })
            })
    },
    qlist: (req, res) => {
        console.log('masuk')
        let url = ''
        if (req.query.filter && req.query.type) {
            url = `https://favqs.com/api/quotes/?filter=${req.query.filter}&type=${req.query.type}`
        } else if (req.query.type) {
            url = `https://favqs.com/api/quotes/?type=${req.query.type}`
        } else if (req.query.filter) {
            url = `https://favqs.com/api/quotes/?filter=${req.query.filter}`
        } else {
            url = `https://favqs.com/api/qotd`
        }

        axios
            .get(`${url}`, {
                headers: {
                    Authorization: `Token token=${process.env.FAVQS_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(({data}) => {
                res.status(200).json({ data })
            })
            .catch(err => {
                res.status(500).json({ err: err.message })
            })
    }
}