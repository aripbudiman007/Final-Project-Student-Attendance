const IndexController = require('../controllers/indexController')

const router = require('express').Router()
const studentRouter = require('./studentRouter')
const classRouter = require('./classRouter')
const attendanceRouter = require('./attendanceRouter')

router.get('/', IndexController.index)

router.use('/students', studentRouter)
router.use('/class', classRouter)
router.use('/attendance', attendanceRouter)

module.exports = router