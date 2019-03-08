var express = require('express');
var router = express.Router();
const userController = require('../controller/user');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/comment', userController.newComment)

router.get('/comment/:movieId', userController.getComments)

router.post('/googleSignIn', userController.googleSignIn);

module.exports = router;
