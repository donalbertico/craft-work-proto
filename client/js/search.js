Template.search.rendered = function(){

		// var expression = '.*'+FlowRouter.current.params.expression+'.*';

		console.log(FlowRouter.current().params);
}

Template.search.helpers({

	result : function(){

		// var expression = '.*'+FlowRouter.current.params.expression+'.*';

		// console.log(expression);

		// var result = items.find({$or : [{name : {$regex : expression} } ,{ description : {$regex : expression} } ] });
	
		return expression;
	}

});