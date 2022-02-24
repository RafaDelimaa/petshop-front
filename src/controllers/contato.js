router.get('/', function(req, res, next) {
    res.render('contato', { title: 'Express' });
  });