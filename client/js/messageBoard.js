
Template.messageBoard.rendered = function() {     

};

Template.messageBoard.helpers({
	
	'chats': function(){

		var messagesVar = channels.find().fetch();

	 	console.log("intento o lo que sea");
	 	console.log(messagesVar);
		 for(var a in messagesVar){

		 	console.log(messagesVar[a]);
		 	if(messagesVar[a].userA!==this.userId){

		 		messagesVar[a].submiter = Meteor.users.findOne({_id : messagesVar[a].userB});
		 	}else{

		 		messagesVar[a].submiter = Meteor.users.findOne({_id : messagesVar[a].userA});
		 	}

		 	console.log(messagesVar[a]);
		 }

		return messagesVar;
	}
});

Template.messageBoard.events({
	
	'click .message' : function(e){

		FlowRouter.setParams({ chatId : "postId"});
	},
	
	// 'click .btn-flat' : function(e){
		
	// 	if(Meteor.userId()){
			
	// 			if (!$.trim($("#textarea").val())) {
	// 	    		// Materialize.toast('',4000);
	// 	    		$('#textarea').focus();
	// 			}else{
	// 				var createMessage = Meteor.call('createMessage',profileUserId , $("#textarea").val());
	// 				console.log(createMessage);
	// 			}
	// 	}else{
			
	// 		Materialize.toast('debes logearte',4000);
	// 	}
	
	// }
});