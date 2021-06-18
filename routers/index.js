const IndexController = require('../controllers/indexController')

const router = require('express').Router()
const studentRouter = require('./studentRouter')
const classRouter = require('./classRouter')
const attendanceRouter = require('./attendanceRouter')
const loginRouter = require('./loginRouter')
const registerRouter = require('./registerRouter')
const authMiddleware = require('../helpers/authMiddleware')

router.get('/', IndexController.index)

router.use('/login', loginRouter)
router.use('/register', registerRouter)
router.use('/students', authMiddleware, studentRouter)
router.use('/class', authMiddleware, classRouter)
router.use('/attendance', authMiddleware, attendanceRouter)

module.exports = router