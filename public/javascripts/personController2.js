var app = angular.module("myApp", []);
app.controller("myCtrl1", function($scope){
    $scope.count = 0;
    $scope.myvar = false;
    $scope.text = "点击加1(隐藏)";
    $scope.toggle = function(){
       $scope.count += 1;
       $scope.myvar = !$scope.myvar;
       $scope.text = $scope.myvar? "点击加1显示":"点击加1隐藏";
   };
   $scope.init = function(){
        $scope.count = 0;
        $scope.myvar = false;
   };
});
app.controller("myCtrl2", function($scope, $interval){
    $scope.time = new Date().toLocaleTimeString();
    $interval(function(){
        $scope.time = new Date().toLocaleTimeString();
    },1000);
});
app.controller("myCtrl3", function($scope){
    $scope.master = {firstname:"John", lastname:"Doe"};
    $scope.reset = function(){
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});

app.controller("myCtrl4", function($scope){
    $scope.user = "John De";
    $scope.email = "john.doe@mail.com";
});

app.controller("myCtrl5", function($scope){
    var users = [
        {id:1, fname:'Hege',lname:"Pege" },
        {id:2, fname:'Kim',lname:"Pim" },
        {id:3, fname:'Sal',lname:"Smith" },
        {id:4, fname:'Jack',lname:"Jones" },
        {id:5, fname:'John',lname:"Doe" },
        {id:6, fname:'Peter',lname:"Pan" }];
    $scope.names = users;
    $scope.fname = "";
    $scope.lname = "";
    $scope.password = "";
    $scope.cpassword = "";
    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;
    $scope.editUser = function(id){
        if (id == 'new'){
            $scope.edit = true;
            $scope.fname = '';
            $scope.lname = '';
            $scope.cpassword = '';
            $scope.password = '';
        }else {
            $scope.fname = users[id -1].fname;
            $scope.lname = users[id -1].lname;
            $scope.edit = false;
            var editid = id;
        }
    };
    $scope.$watch('password', function(){$scope.test();});
    $scope.$watch('cpassword', function(){$scope.test();});
    $scope.$watch('fname', function(){$scope.test();});
    $scope.$watch('lname', function(){$scope.test();});

    $scope.test = function(){
        if ($scope.password !== $scope.cpassword){
            $scope.error = true;
        }else{
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ($scope.edit && (!$scope.fname.length || !$scope.lname.length 
            || !$scope.password.length || !$scope.cpassword.length)){
                $scope.incomplete = true;
                console.log($scope.password.length);
            }
    };

    $scope.adduser = function(){
        if ($scope.edit){
            var dan = {id:users.length + 1, fname: $scope.fname, lname: $scope.lname};
            users.push(dan)
            $scope.editUser('new');
        }else{
            user[editid -1].fname = $scope.fname;
            user[editid -1].lname = $scope.lname;
            editid = "";
            $scope.editUser('new');
        }
    };
});

