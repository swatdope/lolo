import express from 'express' 
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)

export default router

// 273010466363-kpsr7cbdppm6n27vg9pidiq3jnb1nqgv.apps.googleusercontent.com