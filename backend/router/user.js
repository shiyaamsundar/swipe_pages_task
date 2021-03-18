const  express = require('express')
const router = express.Router()
const { signin,signout,signup, addtowatchlist, getuserwatchlist,addtouserrecmm,getallrecmm } = require('../controller/user')


router.get('/signout',signout)
router.get('/watchlist/:email',getuserwatchlist)
router.get('/recmm/:email',getallrecmm)
router.post('/signin',signin)
router.post('/signup',signup)
router.post('/addtowatchlist',addtowatchlist)
router.post('/addtorecmm',addtouserrecmm)



module.exports = router