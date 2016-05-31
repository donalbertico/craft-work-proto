channels = new Mongo.Collection('channels');

channels.allow({
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
	userA : {
		type : String,
		autoValue : function(){
			return this.userId;
		},
		regEx: SimpleSchema.RegEx.Id
	},
	userB : {
	   type: String,
	   optional: false,
	   regEx: SimpleSchema.RegEx.Id
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
	}
});


Meteor.methods({
	
	insertChannel : function(userB){
		
		var userb = Meteor.users.findOne(userB);
		console.log(userb)
		
		if(this.userId){

			
			if(userb){

				channels.insert({userB : userB});
			}else{

				return false;
			}
		}else{

			return false;
		}
	},

	verifyChannel : function(userB){

		if(channels.findOne({ $or: [ {userA : this.userId, userB : userB }, {userA : userB , userB : this.userId} ]}) ){

			return	true;
		}else{

			return false;
		}
	}
});


channels.attachSchema(recipeSchema);