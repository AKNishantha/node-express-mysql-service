const azureUsersGetC =  require('../controllers/azureUsersGetC');
const express = require('express');
const router = express.Router();

router.get(
    '/get',
    azureUsersGetC.dictionaryDataGet
);


module.exports =router;
