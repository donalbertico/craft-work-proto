var isLogged = function(template){
	console.log(Meteor.userId());
	if(Meteor.userId()=== null){
		BlazeLayout.render('mainLayout',{main : 'loginForm'});
	}else{
		BlazeLayout.render('mainLayout',{main : template});
	}
};
FlowRouter.route('/',{
	name: 'home',
	action(){
		BlazeLayout.render('mainLayout',{main : 'home'});
	},
});
FlowRouter.route('/items',{
	name: 'items',
	action(){
		isLogged('itemNew')
	},
});
FlowRouter.route('/items/new',{
	name: 'new item',
	action(){
		isLogged('itemNew')
	},
});
FlowRouter.route('/login',{
	name: 'log in',
	action(){
		BlazeLayout.render('mainLayout',{main : 'loginForm'});
	},
});
