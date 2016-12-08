/**
 * @fileOverview The routes definitions.
 */

let router = require('express').Router();

let homeController = require('../controllers/home');

// web routes
router.get('/', homeController.index);

module.exports = router;
