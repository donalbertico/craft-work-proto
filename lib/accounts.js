Accounts.onLogin(function(user){
	redirect = Session.get('redirectAfterLogin');
	if(redirect&&redirect!=='/login'){
		FlowRouter.go(redirect);
	}else{
		FlowRouter.go('home');
	}
	
}); 


