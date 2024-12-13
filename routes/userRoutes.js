const express = require('express');
const { 
    registerUser, 
    loginUser, 
    getUserInfo, 
    updateUser, 
    deleteUser,
    getAllUsers     // Add this import
} = require('../controllers/userController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', verifyToken, getUserInfo);
router.put('/update', verifyToken, updateUser);
router.delete('/delete', verifyToken, deleteUser);
router.get('/all', verifyToken, getAllUsers);    // Add this new route

module.exports = router;
