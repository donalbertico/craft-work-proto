AutoForm.hooks({
  'items-new-form': {
    onSuccess: function (operation, result, template) {
      toast('Item created successfully!', 4000);
    }
  }
});
Template.itemNew.rendered = function() {     
    $('ul.tabs').tabs(); 
      Meteor.subscribe('items');
 var colections = items.find();
 console.log(colections);
  }

