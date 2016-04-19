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
	},
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
