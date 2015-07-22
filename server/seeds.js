Meteor.startup(function () {   

if (Flowers.find({}).count() === 0) {
    Flowers.insert({
		name: 'Roses',
		id: 'roses',
	    price: '$10',
		desc: 'A beautiful bouquet of roses.',
		purchaseLocation: 'http://roses.com',
		company: 'Rose Company',
		likes: 10,
		tweets: 20,
	})
}
});