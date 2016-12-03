var myApp=angular.module("myApp",[]);

myApp.controller("demo",["$scope",function($scope){
	
	var lists=[
		{
			first:"FANG",
			last:"vane",
			Gender:"Male",
			Salary:"12,333.5",
			Birthday:"1445631922320"
		},
		{
			first:"SARA",
			last:"rose",
			Gender:"Female",
			Salary:"232,334.5",
			Birthday:"1280681922320"
		},
		{
			first:"AAM",
			last:"hot",
			Gender:"Male",
			Salary:"66,880.5",
			Birthday:"1480667482320"
		},
		{
			first:"MARK",
			last:"bear",
			Gender:"Male",
			Salary:"68,000.5",
			Birthday:"1180681922320"
		}
	]
	$scope.name='';
	$scope.desc=false;
	$scope.lists=lists;

	var tds=$(".head-item").find("td")
	$scope.addCls = function(column,event){
		var _this=event.target;
		/*$(_this).attr("ng-class","{'active':true}").siblings()..attr("ng-class","{'active':false}")*/
       if($scope.name == column){
           $scope.name = !$scope.name;
           $(_this).addClass("allow-down");
           $(_this).removeClass("allow-up");
       }else{
        	$scope.name = column;
        	$(_this).addClass("allow-up");
        	$(_this).removeClass("allow-down");
       }
       
    }
}])