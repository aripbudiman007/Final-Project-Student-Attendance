const ClassController = require('../controllers/classController');

const router = require('express').Router();

router.get('/', ClassController.showAllClass)
router.post('/add', ClassController.addClass)

module.exports = router