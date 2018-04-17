const express = require('express'),
    router = express.Router();

router.put('/', (req, res) => {
    req.logout();

    res.status(200).send();
});

module.exports = router;