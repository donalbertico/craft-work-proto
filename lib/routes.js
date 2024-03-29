exposed = FlowRouter.group();

exposed.route('/login',{
	name:'login',
	action(){
		BlazeLayout.render('mainLayout',{main : 'loginForm'});
	}
});

exposed.route('/signup',{
	name:'signup',
	action(){
		BlazeLayout.render('mainLayout',{main : 'loginForm'});
	}
});

exposed.route('/',{
	name: 'home',
	action(){
		BlazeLayout.render('mainLayout',{main : 'home'});
	}
});

exposed.route('/search/:expression',{
	name: 'search',

	action(){

		BlazeLayout.render('mainLayout', { main : 'search'});
	
	}
});

exposed.route('/item-description/:id',{
	name: 'item description',

	action(){

		BlazeLayout.render('mainLayout', { main : 'itemDescription'});
	
	}
});

exposed.route('/profile/:id',{
	name: 'user profile',

	action(){

		BlazeLayout.render('mainLayout', { main : 'userProfile'});
	
	}
});

exposed.route('/myMessages',{
	name: 'message board',

	action(){

		BlazeLayout.render('mainLayout', { main : 'messageBoard'});
	}
});

exposed.route('/myMessages/:chatId',{
	name: 'chat',

	action(){

		BlazeLayout.render('mainLayout', { main : 'messageBoard'});
	}
});


loggedIn= FlowRouter.group({
	triggersEnter:[function(context,redirect){
		var route = FlowRouter.current();
		if(Meteor.loggingIn()||Meteor.userId()){
			FlowRouter.go(route.route.name);
			console.log(route.route.name);
		}else{
			console.log(route);
			if(route.route.name !== 'login'){
				Session.set('redirectAfterLogin',route.path)
			}
			FlowRouter.go('login');
		}
	}]
});

loggedIn.route('/items',{
	name: 'items',
	action(){
		BlazeLayout.render('mainLayout',{main : 'itemNew'});
	}
});

loggedIn.route('/items/new',{
	name: 'new item',
	action(){
		BlazeLayout.render('mainLayout',{main : 'itemNew'});
	}
});

loggedIn.route('/logout',{
	name: 'logout',
	action(){
		Meteor.logout(function (err){
			if(err){console.log(err)}
				FlowRouter.go('home');
		});
	}
});

loggedIn.route('/admin',{
	name : 'admin',
	triggersEnter:[function(context,redirect){
		console.log('cheking'+Meteor.user());
		console.log('cheking'+Roles.userIsInRole( Meteor.user(), 'admin' ));
      	if(Roles.userIsInRole( Meteor.user(), 'admin' )){
			return;
		}else{
			FlowRouter.go('/items');
		}
	}],
	action(){
		
		BlazeLayout.render('mainLayout',{main : 'admin'});
	}
});
