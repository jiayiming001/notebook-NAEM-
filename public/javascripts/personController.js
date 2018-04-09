var app1 = angular.module("myApp1", []);
app1.directive("runoobDirective", function() {
return {
    template : "<h1>贾益铭！</h1>"
    };
});


var app2 = angular.module("myApp2", []);
app2.controller("myCtrl", function($scope){
    $scope.myText = "test@runoob.com";
});


var app3 = angular.module("myApp3", []);
app3.controller("myCtrl2", function($scope){
    $scope.firstName = "john";
    $scope.lastName = "Done";
});


var app4 = angular.module("myApp4", []);
app4.controller("myCtrl3", function($scope){
    $scope.names = [
        {name:'Jani', country: 'Norway'},
        {name:'Hege', country:'Sweden'},
        {name:'Kai', country: 'Denmark'}
    ];
});
app4.controller("myCtrl4", function($scope){
    $scope.msg = "Runoob";
});
app4.filter('reverse', function(){
    return function(text){
        return text.split("").reverse().join("");
    }
});

var app5 = angular.module("myApp5", []);
app5.controller("Time", function($scope, $interval){
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function(){
        $scope.theTime = new Date().toLocaleTimeString(); 
    }, 1000);
});

app5.service("hexafy", function(){
    this.myFunc = function(x){
        return x.toString(16);
    }
});

app5.controller("myCtrl5", function($scope, hexafy){
    $scope.hex = hexafy.myFunc(parseInt("255"));
});

app5.filter("myFormat", ['hexafy', function(hexafy){
    return function(x){
        return hexafy.myFunc(x);
    }
}]);

app5.controller("siteCtrl", function($scope, $http){
    $http.get("/json").then(function(response){
        $scope.names = response.data.sites;
    });
});

app5.controller("myCtrl6", function($scope){ 
    $scope.names = ['Baidu', 'Google', 'Runoob'];
    $scope.selectedName = $scope.names[0];
})


app5.controller("myCtrl7", function($scope){
    $scope.sites = [
        {site : "Google", url : "http://www.google.com"},
        {site : "Baidu", url : "http://www.baidu.com"},
        {site : "Runoob", url : "http://www.Runoob.com"}
    ];
});


app5.controller("myCtrl8", function($http, $scope){
    $http.get("/json2").then(function(response){
        $scope.names = response.data['records'];
    })
});
angular.module("myApp", ['myApp1', 'myApp2', 'myApp3', 'myApp4', 'myApp5']);