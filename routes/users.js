var express = require('express');
var router = express.Router();

const characters = require('../data/characters.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    characters: characters.characters
  });
});

router.get('/:id', function(req, res, next) {
  var id = parseInt(req.params.id);
  var matchingUser = characters.characters.filter(character => character.id === id);
  res.render('users', { 
    character: matchingUser[0],
    output: id
  })
});

router.post('/submit', function(req, res, next) {
  var id = req.body.id;
  res.redirect('/users/' + id);
});

module.exports = router;
