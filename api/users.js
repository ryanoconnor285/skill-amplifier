const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const {
  check,
  validationResult
} = require('express-validator');

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
    return res.status(400).json({
      errors: errors.array()
    })
  }

  const {
    email
  } = req.body;

  try {

    // Find user by email
    let user = await User.findOne({
      email
    })

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

// @route POST api/users
// @desc Register user
// @ access Pulic
router.post('/',
  [
    check('firstName', 'First name is required.').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const {
      firstName,
      lastName,
      email,
      password
    } = req.body;

    try {
      let user = await User.findOne({
        email
      });

      if (user) {
        return res.status(400).json({
          errors: [{
            msg: 'User already exists '
          }]
        })
      }

      user = new User({
        firstName,
        lastName,
        email,
        password
      })

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send('User Registered');

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error')
    }
  })

module.exports = router;