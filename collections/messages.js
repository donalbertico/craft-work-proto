messages = new Mongo.Collection('messages');

messages.allow({
	insert : function(){
		return true;
	},
	update : function(){
		return true;
	},
	remove : function(){
		return true;
	}
});

recipeSchema = new SimpleSchema({
	user : {
		type : String,
		autoValue : function(){
			return this.userId;
		},
		regEx: SimpleSchema.RegEx.Id,
		autoform : {
	    	type : 'hidden'
	    }
	},
    createdAt: {
	    type: Date,
	    autoValue: function() {
	      if (this.isInsert) {
	        return new Date();
	      } else if (this.isUpsert) {
	        return {$setOnInsert: new Date()};
	      } else {
	        this.unset();  // Prevent user from supplying their own value
	      }
	    },
	    autoform : {
	    	type : 'hidden'
	    }
	},
	channel:{
		
		type: String,
		regEx: SimpleSchema.RegEx.Id
	},
	text : {

		type: String,
		max : 200,
		autoform : {

			type: 'textarea'
		}
	}
});


Meteor.methods({

	createMessage : function(userB, text){
		
		var userb = Meteor.users.findOne(userB);
		console.log(userb._id);
		
		if(this.userId){

			
			if(userb){

				var channel = Meteor.call('verifyChannel', userB);
				console.log(channel);
				if(channel){
					
					console.log('si hay canal');
					var message = messages.insert({text : text , channel: channel});
					console.log('message');
					return true;
				}else{
					
					console.log('no hay pero se crea');
					channels.insert({userB : userB});
					channel = Meteor.call('verifyChannel', userB);
					console.log(channel);
					messages.insert({text : text , channel: channel});
					return true;
				}
			}else{

				return false;
			}
		}else{

			return false;
		}
	},

	sendMessage : function(channel,text){

		messages.insert({text : text , channel: channel});
	},

	getMessages : function(){

		var messagesVar = channels.find({ $or: [ {userA : this.userId }, {userB : this.userId} ]}).fetch();

	 	console.log("intento o lo que sea");
	 	console.log(messagesVar[a]);
		 for(var a in messagesVar){

		 	console.log(messagesVar[a]);
		 	if(messagesVar[a].userA!==this.userId){

		 		messagesVar[a].submiter = Meteor.users.findOne({_id : messagesVar[a].userB});
		 	}else{

		 		messagesVar[a].submiter = Meteor.users.findOne({_id : messagesVar[a].userA});
		 	}

		 	console.log(messagesVar[a]);
		 }

		return messagesVar;
	}
	
});


messages.attachSchema(recipeSchema);