const express = require('express');
const router = express.Router();


const UrlControlle = require('../controller/urlController')


router.post("/url/shorten", UrlControlle.urlShortener)

router.get("/:urlCode", UrlControlle.redirect)


module.exports = router;


