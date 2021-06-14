const router = require('express').Router()

router.get('/', (req, res) => {
    console.log(`requerst success`);
})

module.exports = router