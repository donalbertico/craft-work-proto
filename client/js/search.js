var sort = '1';
var resultDep = new Tracker.Dependency();

Template.search.rendered = function(){
	$('select').material_select();

	if(FlowRouter.current().params.sort){
		sort = FlowRouter.current().params.sort;
	}

}

Template.search.result =  function(){

		resultDep.depend();

		expression = '.*'+FlowRouter.current().params.expression+'.*';
		console.log(expression);
		console.log(sort);
		

		switch(sort){

			case '1' : 
				var result = items.find({$or : [{name : {$regex : expression} } ,{ description : {$regex : expression} } ] });

			break;

		}

	
		return result;
}


Template.search.events({

	'change select' : function(e){
		
		sort = $('select')[0].value;

		resultDep.changed();

	},

	'click div.card' : function(e){
		console.log(this._id);
		FlowRouter.go('/item-description/'+this._id);

	}

});

Template.search.searchBarSubmit = function(expression){
	console.log(expression);

	FlowRouter.setParams({expression : expression});

	resultDep.changed();

};
