const router = require('express').Router()
const infoController = require('../controllers/person.controller')

router.get('/', (req, res) => {
    let data = infoController()
    res.json(data)
})
module.exports = router;
