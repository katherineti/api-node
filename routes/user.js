// import {Router} from 'express'

// const router = Router();

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(403).json({
        message: 'get API RESTful'
    })
})

router.put('/', (req, res) => {
    res.status(403).json({
        message: 'put API RESTful'
    })
})
router.post('/', (req, res) => {
    res.status(403).json({
        message: 'post API RESTful'
    })
})
router.delete('/', (req, res) => {
    res.status(403).json({
        message: 'delete API RESTful'
    })
})
router.patch('/', (req, res) => {
    res.status(403).json({
        message: 'patch API RESTful'
    })
})

// module.exports = router;
// export {router}
// module.exports = router;

// export default router