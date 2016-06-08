var chatDep = new Tracker.Dependency();

Template.chat.rendered = function() {     


	 
};

Template.chat.helpers({
	
	messages : function(){
		
		chatDep.depend();
		return messages.find({channel : FlowRouter.current().params.chatId});
	},

	channel: function(){
		
		chatDep.depend();
		return FlowRouter.current().params.chatId;
	}
});

Template.chat.changeChat = function(chat){
	
		FlowRouter.setParams({ chatId : chat});
		chatDep.changed();
}

Template.chat.vari = function(){
	
	console.log('hell yes');
	
	chatDep.changed();
}

Template.chat.events({
	
	editChat(){
		console.log('siii');
		return messages.find({channel : FlowRouter.current().params.chatId});
	}
	
});
