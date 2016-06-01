items = new Mongo.Collection('items');


items.allow({
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
	name : {
		type : String,
		label: 'Name',
		max : 200
	},
	description : {
	   type: String,
	    optional: true,
	    label : 'Description',
	    max: 1000,
	    autoform : {
	    	type : 'textarea'
	    }
	},
	pricing : {
	   type: Number,
	   decimal : true,
	   label : 'Price',
	    optional: true,
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
    updatedAt: {
	    type: Date,
	    autoValue: function() {
	      if (this.isUpdate) {
	        return new Date();
	      }
	    },
	    denyInsert: true,
	    optional: true,
	    autoform : {
	    	type : 'hidden'
	    }
	  },
	owner :{
		type : String,
		autoValue : function(){
			return this.userId;
		},
	    autoform :{
	    	type : 'hidden'
	    }
	},
	type : {
		type : String 
		
	}
});


Meteor.methods({
	deleteItem : function(id){
		check(id,String);
		items.remove(id);
	}
});


items.attachSchema(recipeSchema);

