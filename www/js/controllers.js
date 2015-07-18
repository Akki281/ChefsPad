angular.module('starter.controllers')

.controller('RecipeListController', function($scope) {


      $scope.RecipeList = [{

          name: "Cake",
          ingredients : "10",
          creator : "Mum",
          favorite : "y",
          star : 4

      }, {
          name: "Cookies",
          ingredients : "15",
          creator : "Mum",
          favorite : "y",
          star : 5

      }, {

          name: "Crisps",
          ingredients : "12",
          creator : "Me",
          favorite : "n",
          star : 1
        }
      ];
    });


