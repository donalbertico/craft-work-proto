Template.searchBar.rendered = function() {     
	Meteor.typeahead.inject();

};

Template.searchBar.events({
	
	'keypress input': function(e){

		if(e.keyCode == 13) {
		console.log('aqi');

			search();
		}

	},
	
	'click .waves-effect.waves-light.btn-large': function(e){

			search();

	}

});

var search = function(){

	console.log($('input.form-control.typeahead')[1].value);

	var expression = $('input.form-control.typeahead')[1].value

	if(!expression){
		
		 Materialize.toast('Debes escribir algo!', 4000) 

	}else{

		if(FlowRouter.current().route.name === 'search'){

			Template.search.searchBarSubmit(expression);

		}else{

	 		FlowRouter.go('/search/'+expression);

	 	}

	}

  
}


Template.searchBar.helpers({

  items: function() {
    return items.find().fetch().map(function(item){ 
    	return item.name; });
  }

});

