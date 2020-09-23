const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route   GET api/users
// @desc    Test route
// @access  Public

router.get('/', [
  check('email', 'Email is required.').not().isEmpty(),
  check('email', 'Please enter a valid email.').isEmail(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { email } = req.body;

  try {

    // Find user by email
    let user = await User.findOne({email})

    if (!user) {
      console.log('email not found')
    } else {
      console.log(user)
    }

  } catch (error) {
    console.error(error);
  }

  res.send('User Route')
});

module.exports = router;