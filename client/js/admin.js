Template.admin.helpers({
	users(){
		var allUs;
		allUs =  Meteor.users.find({}).fetch();
		for(var user in allUs){
			allUs[user].items = items.find({owner : allUs[user]._id}).fetch();
		}
		console.log(allUs);
		return allUs;
	}
});
Template.admin.events({
	'click .collapsible-header ' : function(e){
		Session.set('watchingUser',this._id);
		console.log(Session.get('watchingUser'));
		$(e.currentTarget.children[1]).toggle();
	},
	'click .waves-effect.waves-light.delete.btn' : function(e){
		Meteor.call('deleteItem',this._id);
        Materialize.toast('Item borrado!', 4000) ;
	}
});
