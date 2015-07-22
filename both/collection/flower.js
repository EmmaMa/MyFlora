Flowers = new Mongo.Collection("flowers");

Flowers.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  name: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },

}));