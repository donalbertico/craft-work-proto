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
	createMessage : function(userB,text){
		
		var userb = Meteor.users.findOne(userB);
		console.log(userb)
		
		if(this.userId){

			
			if(userb){

				channels.insert({userB : userB});
				
				messages.insert({text : text , channel:'sdff'});
				
				return true;
			}else{

				return false;
			}
		}else{

			return false;
		}
	}
	
});


messages.attachSchema(recipeSchema);