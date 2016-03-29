AutoForm.hooks({
  'items-new-form': {
    onSuccess: function (operation, result, template) {
       Materialize.toast('Item ingresado!', 4000) ;
    }
  }
});
Template.itemNew.rendered = function() {     
    if(FlowRouter.current().route.name==='new item'){
    	$('#newTab').addClass('active');
    }
    $('ul.tabs').tabs(); 
    $('.collapsible').collapsible();
}
Template.itemNew.events({
	'click .tabs li' : function(e){
		if(e.target.id==='newTab'){
			window.history.pushState('','','/items/new');
		}else{
			window.history.pushState('','','/items');
		}
	},
	'click .collapsible-header ' : function(e){
		console.log(e);
		$(e.currentTarget.children[1]).toggle();
	},
	'click .waves-effect.waves-light.delete.btn' : function(e){
		Meteor.call('deleteItem',this._id);
        Materialize.toast('Item borrado!', 4000) ;
	}
});
Template.itemNew.helpers({
	items(){
		return items.find({});
	}
});

