'use strict';

/**
 * @ngdoc function
 * @name eiffelApp.controller:PropertyGetDetailsCtrl
 * @description
 * # PropertyGetDetailsCtrl
 * Controller of the eiffelApp
 */



(function(){
    angular.module('eiffelApp')
        .controller('PropertyGetDetailsCtrl',AppCtrl);
function AppCtrl($q, filterFilter, $rootScope,$scope) {
var _this=this;
    $rootScope.headerShow = "dashboard";
    var self = this;
    self.readonly = false;
    self.selectedItem = null;
    self.searchText = null;
    self.querySearch = querySearch;
    self.vegetables = loadVegetables();
    self.selectedVegetables = [];
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
                     var results = query ? self.vegetables.filter(createFilterFor(query)) : [];
                     return results;
                 }

    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(vegetable) {
            return (vegetable._lowername.indexOf(lowercaseQuery) === 0) /*||
                (vegetable._lowertype.indexOf(lowercaseQuery) === 0)*/;
        };
    }
    function loadVegetables() {
        var veggies = [
            {
                'name': 'Property'

            },
            {
                'name': 'Property1'

            },
            {
                'name': 'Property2'

            },
            {
                'name': 'Property3'

            },
            {
                'name': 'Property4'
                /*'type': 'Goosefoot'*/
            }
        ];
        return veggies.map(function (veg) {
            veg._lowername = veg.name.toLowerCase();
           /* veg._lowertype = veg.type.toLowerCase();*/
            return veg;
        });
    }


    _this.submit=function (){
        // Set the 'submitted' flag to true
        $scope.submitted = true;


          if(self.selectedVegetables.length>0){

             /* console.log(self.selectedVegetables);*/
              /*console.log('not empty nitesh');*/

          }else{
             /* console.log(self.selectedVegetables);*/
              var messageProperty="";
              $scope.messageProperty="Please Select property type";
             /* console.log(messageProerty);*/

          }


      /* console.log(self.selectedVegetables);
        console.log(isDefined(self.selectedVegetables));*/
       /* if (empty(self.selectedVegetables)){
            _this.messageProerty="Please Select property type";
            console.log('qweqweqweq');
            console.log(self.selectedVegetables);
        }else {

            console.log('nitesh');
        }*/
       /* console.log(self.selectedVegetables);*/
        /*return;*/

       /* $scope.typeProperty = ['Required', 'Offered'];*/
       // console.log('form submit nitesh');
        // Send the form to server
        // $http.post ...
        /* return true;*/

      /*  console.log(data.selectedVegetables.name = item.name);*/
  };
    /*$scope.property={selectType:null};

    _this.typeProperty='';*/
   /* _this.typePropertys = [
        {
            name: 'Property'

        },
        {
            name: 'Property1'

        }

    ];*/




}
})();
