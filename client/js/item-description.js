Template.itemDescription.rendered = function() {     

	console.log(FlowRouter.current().params.id);
};

Template.itemDescription.helpers({
	
	'info': function(){

		return items.find({_id: FlowRouter.current().params.id});

	}

});