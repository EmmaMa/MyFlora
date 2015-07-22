Flowers = new Mongo.Collection("flowers");

Flowers.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 50,
    autoform: {
      'label-type': 'stacked',
      'template': 'plain',
    }
  },
  price: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked',
      'template': 'plain',
    }
  },
  imageUrl: {
  	type: String,
  	max: 200,
  	autoform: {
  		'label-type': 'stacked',
  		type: 'url'
  	}
  },
  desc: {
    type: String,
    max: 50,
    autoform: {
      'label-type': 'stacked'
    },
    label: 'Description'
  },
  purchaseLocation: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  company: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  likes: {
    type: Number,
    autoform: {
      'label-type': 'stacked'
    }
  },
  tweets: {
    type: Number,
    autoform: {
      'label-type': 'stacked'
    }
  },
  color: {
  	type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
}));

