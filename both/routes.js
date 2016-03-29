FlowRouter.route('/',{
	name: 'home',
	action(){
		BlazeLayout.render('mainLayout',{main : 'home'});
	},
});
FlowRouter.route('/items',{
	name: 'items',
	action(){
		BlazeLayout.render('mainLayout',{main : 'itemNew'});
	},
});
FlowRouter.route('/items/new',{
	name: 'new item',
	action(){
		BlazeLayout.render('mainLayout',{main : 'itemNew'});
	},
});
