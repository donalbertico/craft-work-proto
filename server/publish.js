Meteor.publish('items',function (){

		return items.find({});
	
});

Meteor.publish('users',function (){
	if(Roles.userIsInRole( this.userId, 'admin' )){
		return Meteor.users.find();
	}else{
		return Meteor.users.find({_id: this.userId()});
	}
});
