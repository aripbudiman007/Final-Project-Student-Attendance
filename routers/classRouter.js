const ClassController = require('../controllers/classController');

const router = require('express').Router();

router.get('/', ClassController.showAllClass)
router.post('/add', ClassController.addClass)
router.get('/edit/:id', ClassController.updateClassForm)
router.post('/edit/:id', ClassController.updateClassAction)
router.get('/delete/:id', ClassController.deleteClass)

module.exports = router