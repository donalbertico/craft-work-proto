Template.userProfile.rendered = function() {     

	 $('.modal-trigger').leanModal();
};

Template.userProfile.helpers({
	
	'user': function(){

		var user = Meteor.users.findOne({_id: FlowRouter.current().params.id});
		return user;
	}
});

Template.userProfile.events({
	
	'click .openMessanger' : function(e){

		if(!Meteor.userId()){

			Materialize.toast('debes logearte!', 4000);
		}else{

			$('#modal').openModal();
		}
	}
});