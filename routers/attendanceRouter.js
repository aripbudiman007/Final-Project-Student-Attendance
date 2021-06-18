const AttendanceController = require('../controllers/attendanceController')

const router = require('express').Router()

router.get('/', AttendanceController.viewAll)
router.get('/cekin', AttendanceController.cekIn)
router.get('/cekin/add', AttendanceController.submitCekIn)

module.exports = router