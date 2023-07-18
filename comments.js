// Create web server
var express = require('express');
var router = express.Router();

// Require controller modules
var comment_controller = require('../controllers/commentController');

// GET request for creating
router.get('/create', comment_controller.comment_create_get);

// POST request for creating
router.post('/create', comment_controller.comment_create_post);

// GET request to delete
router.get('/:id/delete', comment_controller.comment_delete_get);

// POST request to delete
router.post('/:id/delete', comment_controller.comment_delete_post);

// GET request to update
router.get('/:id/update', comment_controller.comment_update_get);

// POST request to update
router.post('/:id/update', comment_controller.comment_update_post);

// GET request for one
router.get('/:id', comment_controller.comment_detail);

// GET request for all
router.get('/', comment_controller.comment_list);

module.exports = router;