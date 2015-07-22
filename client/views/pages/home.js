
Template.home.helpers({
   flowers: function () {
     return Flowers.find({}, { sort: { name: 1, price: 1 } });
   }
});