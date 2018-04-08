const Router = require('express').Router
const router = new Router()

const user = require('./model/user/router')
const scan = require('./model/scan/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to receipt-scanner-api API!' })
})

router.use('/user', user)
router.use('/scan', scan)

module.exports = router
