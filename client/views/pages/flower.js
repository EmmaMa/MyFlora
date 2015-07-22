AutoForm.hooks({
  'test_id': {
    onSuccess: function (operation, result, template) {
      console.log('Post inserted successfully!');
      console.log(operation);
      console.log(result);
      console.log(template);
      /*Router.go('post.show', {_id: 1}, {query: 'q=s', hash: 'hashFrag'});*/
      Router.go('/biz');
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});