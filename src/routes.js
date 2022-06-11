import express from 'express';
import userController from './controllers/userController';

const router = express.Router();

router.get('/api/user', userController.getAllUsers);
router.get('/api/user/:id', userController.getUser);
router.delete('/api/user/:id', userController.deleteUser);
router.put('/api/user/:id', userController.updateUser);

module.exports = router;    