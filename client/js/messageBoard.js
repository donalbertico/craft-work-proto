
Template.messageBoard.rendered = function() {     

};

Template.messageBoard.helpers({
	
	'chats': function(){

		var messagesVar = channels.find().fetch();

	 	console.log("intento o lo que sea");
		 for(var a in messagesVar){

		 	if(messagesVar[a].userA!==this.userId){

		 		messagesVar[a].submiter = Meteor.users.findOne({_id : messagesVar[a].userB});
		 	}else{

		 		messagesVar[a].submiter = Meteor.users.findOne({_id : messagesVar[a].userA});
		 	}

		 }

		return messagesVar;
	}
});

Template.messageBoard.events({
	
	'click .side-nav li' : function(e){
		
		console.log(this);

		
		console.log(FlowRouter.current().params.chatId);
		
		Template.chat.changeChat(this._id);
		
	
	}
	
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