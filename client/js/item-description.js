Template.itemDescription.rendered = function() {     

};

Template.itemDescription.helpers({
	
	'info': function(){

		var itemInfo = items.findOne({_id: FlowRouter.current().params.id});
		
		if(itemInfo){

			Session.set('itemUser',itemInfo.owner);
		}
		
		return itemInfo;
	},

	'owner': function(){
		
		if(Session.get('itemUser')){

			return Meteor.users.findOne({_id: Session.get('itemUser')});
		}
	}

});

Template.itemDescription.events({

	'click .owner' : function(e){
	
		FlowRouter.go('/profile/'+Session.get('itemUser'));
	}
});