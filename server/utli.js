Accounts.onCreateUser(function(options,user){
	if(user){
		Roles.addUsersToRoles(user,[ 'user' ]);
	}
	return user;
}); 