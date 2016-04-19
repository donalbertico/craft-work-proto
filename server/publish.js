Meteor.publish('items',function (){
	if(Roles.userIsInRole( this.userId, 'admin' )){
		return items.find();
	}else{
		return items.find({owner : this.userId});
	}
});
Meteor.publish('users',function (){
	if(Roles.userIsInRole( this.userId, 'admin' )){
		return Meteor.users.find();
	}else{
		return Meteor.users.find({_id: this.userId()});
	}
});
