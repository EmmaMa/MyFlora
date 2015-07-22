Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

//
// Example pages routes
//

Router.route('/', function () {
    this.render('home');
});

Router.route('/addflower', function () {
    this.render('addFlower');
});

Router.route('/signup', function () {
    this.render('signup');
});

Router.route('/biz', function () {
    this.render('biz');
});

Router.route('/flower/:_id', {
  name: 'flower',
  data: function() { return Flowers.findOne(this.params._id); }
});

/*
Router.route('/', function () {
    Router.go('pageOne');
});
*/
