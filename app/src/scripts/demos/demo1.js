var myApp=angular.module("myApp",[]);

myApp.controller("demo",["$scope",function($scope){
	/*var user=[
		{
			name:"lili",
			age:20
		},
		{
			name:"zhangzhang",
			age:16
		}
	]
	$scope.user=user;
	$scope.isShow=false;
	$scope.counter=0;
    $scope.add = function(){
        this.counter++;
    };
    $scope.items=[]
    $scope.addItem=function($event){
    	if(event.keyCode=="13"){
    		$scope.items.unshift($scope.item);
    		$scope.item="";
    	}
    }

    var book=[
    	{
    		bookName:"从你的全世界路过",
    		isHas:true,
    		publite:false,
    		time:"1480656781689"
    	},
    	{
    		bookName:"微微一笑很倾城",
    		isHas:true,
    		publite:false,
    		time:"1480656781689"
    	},
    	{
    		bookName:"陆垚知马俐",
    		isHas:false,
    		publite:true,
    		time:"1480656781689"
    	},
    	{
    		bookName:"何以笙箫默",
    		isHas:false,
    		publite:false,
    		time:"1480656781689"
    	},
    	{
    		bookName:"从你的全世界路过",
    		isHas:false,
    		publite:true,
    		time:"1480656781689"
    	}
    ]

    $scope.price=134;
    $scope.book=book;*/
    var firends=[
    	{
    		name:"marry",
    		phone:"1345345784"
    	},
    	{
    		name:"lili",
    		phone:"15534578003"
    	},
    	{
    		name:"peter",
    		phone:"1345344245"
    	}
    ]
    $scope.firends=firends;
    $scope.searchTxt="";
}])