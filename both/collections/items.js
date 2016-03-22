items = new Mongo.Collection('items');
items.allow({
	insert : function(){
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
	    max: 1000
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
});
items.attachSchema(recipeSchema);

