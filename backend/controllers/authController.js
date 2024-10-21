import Company from '../models/Company.js';
import jwt from 'jsonwebtoken';
import transporter from '../config/nodemailerConfig.js';
import client from '../config/twilioConfig.js';
import { sendEmail } from '../utils/sendEmail.js';

// Register Company
export const registerCompany = async (req, res) => {
  const { name, phone, companyName, companyEmail, companySize } = req.body;

  try {
    let company = await Company.findOne({ companyEmail });
    if (company) return res.status(400).json({ msg: 'Company already exists' });

    const emailOTP = Math.floor(100000 + Math.random() * 900000).toString();
    const phoneOTP = Math.floor(100000 + Math.random() * 900000).toString();

    company = new Company({
      name,
      phone,
      companyName,
      companyEmail,
      companySize,
      emailOTP,
      phoneOTP,
    });

    await company.save();

    // Send OTP via email
    await sendEmail(companyEmail, 'Verify your email', `Your OTP is: ${emailOTP}`);

    // Send OTP via SMS (Twilio)
    await client.messages.create({
      body: `Your OTP is: ${phoneOTP}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: company.phone,
    });

    res.json({ msg: 'Company registered. Please verify email and phone.' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Verify Email OTP
export const verifyEmailOTP = async (req, res) => {
  const { companyEmail, emailOTP } = req.body;

  try {
    const company = await Company.findOne({ companyEmail });
    if (!company || company.emailOTP !== emailOTP) {
      return res.status(400).json({ msg: 'Invalid OTP' });
    }

    company.isEmailVerified = true;
    company.emailOTP = '';
    await company.save();

    res.json({ msg: 'Email verified successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Verify Phone OTP
export const verifyPhoneOTP = async (req, res) => {
  const { phone, phoneOTP } = req.body;

  try {
    const company = await Company.findOne({ phone });
    if (!company || company.phoneOTP !== phoneOTP) {
      return res.status(400).json({ msg: 'Invalid OTP' });
    }

    company.isPhoneVerified = true;
    company.phoneOTP = '';
    await company.save();

    res.json({ msg: 'Phone verified successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Login Company (optional)
export const loginCompany = async (req, res) => {
  const { companyEmail, password } = req.body;

  try {
    const company = await Company.findOne({ companyEmail });
    if (!company) return res.status(400).json({ msg: 'Company not found' });

    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    if (!company.isEmailVerified || !company.isPhoneVerified) {
      return res.status(403).json({ msg: 'Account not fully verified' });
    }

    const token = jwt.sign({ id: company.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
