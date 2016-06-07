Template.chat.rendered = function() {     

	 FlowRouter.setParams({ chatId : "XM7sTvLFtqB9NKr33"});
};

Template.chat.helpers({
	
	messages(){

		return messages.find({channel : FlowRouter.current().params.chatId});
	},

	channel(){

		return FlowRouter.current().params.chatId;
	}
});
