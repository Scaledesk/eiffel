'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:ServiceGetDetailsCtrl
 * @description
 * # ServiceGetDetailsCtrl
 * Controller of the eiffelApp
 */
/*
angular.module('eiffelApp')
  .controller('ServiceGetDetailsCtrl', function ($scope,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.headerShow = "dashboard";
      var _this=this;

      _this.submit=function () {

      } /!*selectedCategory*!/

  });
*/



(function(){
    angular.module('eiffelApp')
        .controller('ServiceGetDetailsCtrl',AppCtrl);
    function AppCtrl($q, filterFilter, $rootScope,$scope) {
        var _this=this;
        $rootScope.headerShow = "dashboard";
        var self = this;
        self.readonly = false;
        self.selectedItem = null;
        self.searchText = null;
        self.querySearch = querySearch;
        self.category = loadCategory();
        self.selectedCategory = [];
        self.numberChips = [];
        self.numberChips2 = [];
        self.numberBuffer = '';
        self.autocompleteDemoRequireMatch = true;
        self.transformChip = transformChip;
        /*this.property="1";*/

        function transformChip(chip) {
            // If it is an object, it's already a known chip
            if (angular.isObject(chip)) {
                return chip;
            }
            // Otherwise, create a new one
            return { name: chip }
        }

        function querySearch (query) {
            var results = query ? self.category.filter(createFilterFor(query)) : [];
            return results;
        }

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(category) {
                return (category._lowername.indexOf(lowercaseQuery) === 0) /*||
                 (vegetable._lowertype.indexOf(lowercaseQuery) === 0)*/;
            };
        }
        function loadCategory() {
            var categorys = [
                {
                    'name': 'Service'

                },
                {
                    'name': 'Service1'

                },
                {
                    'name': 'Service2'

                },
                {
                    'name': 'Service3'

                },
                {
                    'name': 'Service4'
                    /*'type': 'Goosefoot'*/
                }
            ];
            return categorys.map(function (cate) {
                cate._lowername = cate.name.toLowerCase();
                /* veg._lowertype = veg.type.toLowerCase();*/
                return cate;
            });
        }


        _this.submit=function (){

            $scope.submitted = true;


            if(self.selectedCategory.length>0){


                console.log('not empty nitesh');

            }else{

                var messageProperty="";
                $scope.messageProperty="Please Select property type";
                 console.log(messageProerty);

            }


        };

    }
})();
