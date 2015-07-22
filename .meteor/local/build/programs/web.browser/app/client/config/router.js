(function(){Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

//
// Example pages routes
//

Router.route('/', function () {
    this.render('home');
});

Router.route('/flower', function () {
    this.render('flower');
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

/*
Router.route('/', function () {
    Router.go('pageOne');
});
*/

})();
