var courseRoster = angular.module('courseRoster', ['ui.router']);

 courseRoster.config(function($stateProvider){
     $stateProvider.state("home",{
         url:"",
         templateUrl:"partials/home.html"
     });
      $stateProvide.state('courses',{
          url:"courses",
          templateUrl:"partials/courses.htm"
          controller: "CoursesCtrl"
      });

 });
