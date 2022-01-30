const  express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');
const imagePost = require('../helpers/image');
const privateRoute = require('../middlewares/verifyToken');

// import express from 'express';
// import BlogController from '../controllers/BlogController'
// import imagePost from '../helpers/image';

router.post('/upload', privateRoute.authAdmin , imagePost);
router.post('/Postblog', privateRoute.authAdmin , BlogController.post);
router.patch('/Updateblog/:id', privateRoute.authAdmin , BlogController.updatePostById);
router.get('/Getblog', BlogController.getPosts);
router.get('/Getblog/:id', BlogController.getPostsById);
router.delete('/Deleteblog/:id', privateRoute.authAdmin , BlogController.deletePostById);
router.post('/comment/:id', privateRoute.authUser ,BlogController.commentPost)

module.exports = router;