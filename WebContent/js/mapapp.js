

var myApp = angular.module('myApp', ['ui.router'])
.run(function($rootScope) { 
    $rootScope.GlobalName = "[Global Name]";

    $rootScope.$on('$routeChangeStart', function(event, toState, toParams, fromState, fromParams){ 
    	// logic
    	console.log('route begin change');
    });
    
    $rootScope.$on('$routeChangeSuccess', function(evt, current, previous) {
        console.log('route have already changed');
      }); 
    
    $rootScope.$on('$viewContentLoading',
    		function(event, viewConfig) {
    		// 在这里可以访问所有视图配置属性
    		// 以及一个特殊的“ targetView”属性
    		// viewConfig.targetView
    	console.log('$viewContentLoading have already changed');
    		});
})
.config(function($stateProvider,$urlRouterProvider) {  
	  $stateProvider 
	  .state('mod1', {
	      url: '/mod1',
	      templateUrl: 'mod1/content.html',
	      controller: 'homeController'
	  })
	  .state('mod1.page1', {
		  url: '/page1',
		  templateUrl: 'mod1/page1.html',
		  onEnter: function(){
			  console.log('page1 enter');
		  },
		  onExit: function(){
			  console.log('page1 exit ');
		  }
	  })
	  .state('mod1.page2', {
		  url: '/page2',
		  templateUrl: 'mod1/page2.html',
	  })
	  .state('mod1.page3', {
		  url: '/page3',
		  templateUrl: 'mod1/page3.html',
	  })
	  .state('mod1.page4', {
		  url: '/page4',
		  templateUrl: 'mod1/page4.html',
	  })
	  
	  .state('mod2', {
		  url: '/mod2',
		  templateUrl: 'mod2/content.html'
	  })
	  .state('mod2.page1', {
		  url: '/page1',
		  templateUrl: 'mod2/page1.html'
	  })
	  .state('mod2.page2', {
		  url: '/page2',
		  templateUrl: 'mod2/page2.html',
	  })
	  .state('mod2.page3', {
		  url: '/page3',
		  templateUrl: 'mod2/page3.html',
	  })
	  .state('mod2.page4', {
		  url: '/page4',
		  templateUrl: 'mod2/page4.html',
	  })
	  .state('mod2.page5', {
		  url: '/page5',
		  templateUrl: 'mod2/page5.html',
	  })
	  
	  
	  
	  .state('mod3', {
		  url: '/mod3',
		  templateUrl: 'mod3/content.html'
	  })
	  .state('mod3.page1', {
		  url: '/page1',
		  templateUrl: 'mod3/page1.html'
	  })
	  .state('mod3.page2', {
		  url: '/page2',
		  templateUrl: 'mod3/page2.html'
	  })
	  .state('mod3.page3', {
		  url: '/page3',
		  templateUrl: 'mod3/page3.html'
	  })
	  .state('mod3.page4', {
		  url: '/page4',
		  templateUrl: 'mod3/page4.html'
	  })
	  .state('mod3.page5', {
		  url: '/page5',
		  templateUrl: 'mod3/page5.html'
	  })
	  ;
	  $urlRouterProvider.otherwise('/mod1/page1');
	})
;

myApp.controller('homeController', function($rootScope, $scope, $timeout) 
{
	$scope.scopename = 'home-Controller';
	
	$scope.$on('$routeChangeStart', function(event, toState, toParams, fromState, fromParams){ 
		// logic
		console.log('route begin change');
	});
	
	$scope.printme = function(){
		alert('printme');
	};
	
	$rootScope.$on('$stateChangeStart', 
			function(event, toState, toParams, fromState, fromParams, options){
				console.log('234sk: homeController $stateChangeStart happen');
//			    event.preventDefault(); 
			    // transitionTo() promise will be rejected with 
			    // a 'transition prevented' error
			})
});


