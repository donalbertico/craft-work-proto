Template.searchBar.rendered = function() {     
	Meteor.typeahead.inject();
};

Template.searchBar.events({
	
	'enterKey .form-control.typeahead': function(e){

			console.log('a buscar');

	},
	
	'click .waves-effect.waves-light.btn-large': function(e){

			search();

	}

});

var search = function(){
  	console.log('a buscar');
  	FlowRouter.go('/search/hola');
  }

Template.searchBar.helpers({

  items: function() {
    return items.find().fetch().map(function(item){ 
    	return item.name; });
  }

});