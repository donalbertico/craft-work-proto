Meteor.publish('items',function (){

		return items.find({});	
});

Meteor.publish('users',function (){
	
	return Meteor.users.find();

});

Meteor.publish('singleItem', function (itemId){

	var item = items.findOne(itemId);
	console.log(item);
	var user = Meteor.users.find({_id: item.owner});

	return [item,user];
});