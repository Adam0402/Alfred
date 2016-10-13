angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $state) {
    $scope.user = {
        name: 'Tom',
        password: 'tom'
    }

    $scope.userfs = {
        name: '',
        password: '',
        cfpassword: '',
        email: ''
    }

    $scope.userss = {
        name: '',
        password: ''
    }
    
    $scope.go_signin = function(){
        $state.go('login');
    }

    $scope.go_signup = function(){
        $state.go('signup');
    }

    $scope.sign_in = function(){
        if(($scope.user.name == $scope.userss.name) && ($scope.user.name == $scope.userss.name)){
            $state.go('tab.dash');
        }
    }

    $scope.sign_out = function(){
        $state.go('login');
    }

    $scope.register = function(){

    }

    $scope.back = function(){
        $state.go('splash');
    }

    //Slider for Profile Page
    $scope.data = {};
    $scope.data.index = [];
    $scope.data.currentPage = 0;

    for (var i = 0; i < 3; i++) {
        $scope.data.index.push('profile_' + i);
    }

    var setupSlider = function() {
        //some options to pass to our slider
        $scope.data.sliderOptions = {
            initialSlide: 0,
            direction: 'horizontal', //or vertical
            speed: 300 //0.3s transition
        };

        //create delegate reference to link with slider
        $scope.data.sliderDelegate = null;

        //watch our sliderDelegate reference, and use it when it becomes available
        $scope.$watch('data.sliderDelegate', function(newVal, oldVal) {
            if (newVal != null) {
                $scope.data.sliderDelegate.on('slideChangeEnd', function() {
                    $scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
                    //use $scope.$apply() to refresh any content external to the slider
                    $scope.$apply();
                });
            }
        });
    };

    setupSlider();
});
