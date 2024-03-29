var profileUserId;
Template.userProfile.rendered = function() {     

	 $('.modal-trigger').leanModal();
	 profileUserId = FlowRouter.current().params.id
	 
};

Template.userProfile.helpers({
	
	'user': function(){

		var user = Meteor.users.findOne({_id: profileUserId});
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
	},
	
	'click .btn-flat' : function(e){
		
		if(Meteor.userId()){
			
				if (!$.trim($("#textarea").val())) {
		    		// Materialize.toast('',4000);
		    		$('#textarea').focus();
				}else{
					var createMessage = Meteor.call('createMessage',profileUserId , $("#textarea").val());
					console.log(createMessage);
				}
		}else{
			
			Materialize.toast('debes logearte',4000);
		}
	
	}
});