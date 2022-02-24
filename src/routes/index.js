const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato', function (req, res, next) {
  res.render('contato', { title: 'Express' });
});

router.get('/sobre', function (req, res, next) {
  res.render('sobre', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/cadastro', function (req, res, next) {
  res.render('cadastro', { title: 'Express' });
});

router.get('/servicos', function (req, res, next) {
  res.render('servicos', { title: 'Express' });
});

module.exports = router;
