Router.route('/', function(){
  this.render('uploadPhoto');
});

Router.route('/editPage', function(){
  this.render('editPage');
});

Router.route('/partitionPage', function(){
  this.render('partitionPage');
});

Router.route('/verifyPage', function(){
  this.render('verifyPage');
});