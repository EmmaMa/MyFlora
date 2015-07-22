Bizs = new Mongo.Collection("bizs");

Bizs.attachSchema(new SimpleSchema({
 username: {
   type: String,
   max: 200,
   autoform: {
     'label-type': 'stacked',
     'template': 'plain',
   },
   label: 'User Name'
 },
 password: {
   type: String,
   max: 200,
   autoform: {
     'label-type': 'stacked',
     'template': 'plain',
   },
   label: 'Password'
 },
 business_name: {
   type: String,
   max: 200,
   autoform: {
     'label-type': 'stacked'
   },
   label: 'Business Name'
 },
 business_address: {
   type: String,
   max: 200,
   autoform: {
     'label-type': 'stacked'
   },
   label: 'Business Address'
 },
 phone_number: {
   type: String,
   max: 200,
   autoform: {
     'label-type': 'stacked'
   },
   label: 'Phone Number'
 },
 website: {
   type: String,
   max: 200,
   autoform: {
     'label-type': 'stacked'
   },
   label: 'Website',
   type: 'url'
 }
}));