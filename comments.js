// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { catchErrors } = require('../handlers/errorHandlers');

// Routes
router.get('/', catchErrors(commentController.getComments));
router.post('/', catchErrors(commentController.createComment));
router.get('/:id', catchErrors(commentController.getComment));
router.put('/:id', catchErrors(commentController.updateComment));
router.delete('/:id', catchErrors(commentController.deleteComment));

module.exports = router;