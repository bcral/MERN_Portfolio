const express = require('express');
const router = express.Router();
const Profile = require('../models/profileModel');
const Project = require('../models/projectModel');

router.get('/profile', function(req, res) {
    Profile.find(function(err, profile) {
        res.json(profile)
    });
});

router.get('/projects', function(req, res) {
  Project.find(function(err, projects) {
      res.json(projects)
  });
});

router.post('/profile', function(req, res) {
    let profile = new Profile(req.body);
    profile.save()
        .then(profile => {
            res.send(profile);
        })
        .catch(function(err) {
            res.status(422).send('Profile add failed.' + err);
        });
});

router.delete('/profile', function(req, res) {  
    Profile.findById(req.params.id, function(err, profile) {
      if (!profile) {
        res.status(404).send('Profile not found');
      } else {
        Profile.findByIdAndRemove(req.params.id)
          .then(function() { res.status(200).json("Profile deleted") })
          .catch(function(err) {
            res.status(400).send("Profile delete failed.");
          })
      }
    });
  });

  module.exports = router;