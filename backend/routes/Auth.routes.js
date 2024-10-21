import express from 'express';
import { registerCompany, verifyEmailOTP, verifyPhoneOTP, loginCompany } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerCompany);
router.post('/verify-email', verifyEmailOTP);
router.post('/verify-phone', verifyPhoneOTP);
router.post('/login', loginCompany);

export default router;
