FlowRouter.route('/',{
	name: 'home',
	action(){
		BlazeLayout.render('mainLayout',{main : 'home'});
	},
});
var itemsRoute = FlowRouter.group({
	prefix : '/items',
	name: 'Items',
	action(){
		BlazeLayout.render('mainLayout',{main : 'itemNew'});
	}
});
itemsRoute.route('/',{
	name: 'Items',
	data : {
		items : items.find({})
	},
	action(){
		console.log(items.find({}));
		BlazeLayout.render('mainLayout',{main : 'itemNew', section : 'list'});
	}
});
itemsRoute.route('/new',{
	name: 'Items',
	action(){
		BlazeLayout.render('mainLayout',{main : 'itemNew', section : 'newItem'});
	},
	data : {
		items : items.find({})
	}
});