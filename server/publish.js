Meteor.publish('items',function (){

		return items.find({});	
});

Meteor.publish('users',function (){
	
	return Meteor.users.find();

});

Meteor.publish('channels',function (){
	
	return channels.find();
});

Meteor.publish('messages',function (){
	
	return messages.find();
});

Meteor.publish('myChannels',function (){
	
	var currentId = this.userId;
	return channels.find({ $or: [ {userA : currentId }, {userB : currentId} ]});
});

Meteor.publish('yo',function (){
	
	return Meteor.users.find({_id : 'XM7sTvLFtqB9NKr33'});
});

Meteor.publish('singleItem', function (itemId){

	var item = items.findOne(itemId);
	console.log(item);
	var user = Meteor.users.find({_id: item.owner});

	return [item,user];
});