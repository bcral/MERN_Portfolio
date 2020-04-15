const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Profile', profileSchema, 'profile');
