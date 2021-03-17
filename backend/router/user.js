const  express = require('express')
const router = express.Router()
const { signin,signout,signup, addtowatchlist, getuserwatchlist } = require('../controller/user')


router.get('/signout',signout)
router.get('/watchlist/:email',getuserwatchlist)
router.post('/signin',signin)
router.post('/signup',signup)
router.post('/addtowatchlist',addtowatchlist)



module.exports = router