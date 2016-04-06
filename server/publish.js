Meteor.publish('items',function (){
	return items.find({owner : this.userId});
});