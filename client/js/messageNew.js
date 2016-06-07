Template.messageNew.events({
	
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
					var createMessage = Meteor.call('sendMessage',FlowRouter.current().params.chatId , $("#textarea").val());
					console.log(createMessage);
				}
		}else{
			
			Materialize.toast('debes logearte',4000);
		}
	
	}
});