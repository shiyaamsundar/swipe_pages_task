const  express = require('express')
const router = express.Router()
const { signin,signout,signup } = require('../controller/user')


router.get('/signout',signout)
router.post('/signin',signin)
router.post('/signup',signup)


module.exports = router