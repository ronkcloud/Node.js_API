const express = require ('express')
const router = express.Router()

router.get('/', (_, res)=>{
    res.render('../views/index')
})

module.exports = router