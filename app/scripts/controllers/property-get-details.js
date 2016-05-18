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
function AppCtrl($q, filterFilter, $rootScope) {

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
                'name': 'Broccoli'

            },
            {
                'name': 'Cabbage'

            },
            {
                'name': 'Carrot'

            },
            {
                'name': 'Lettuce'

            },
            {
                'name': 'Spinach'
                /*'type': 'Goosefoot'*/
            }
        ];
        return veggies.map(function (veg) {
            veg._lowername = veg.name.toLowerCase();
           /* veg._lowertype = veg.type.toLowerCase();*/
            return veg;
        });
    }
    /*
    var vm = this;

    vm.selectedItem = null;
    vm.searchText = null;
    vm.selectedPros = [];
    vm.transformChip = transformChip;
    vm.autocompleteDemoRequireMatch = false;
    vm.querySearchDeferred = querySearchDeferred;

    function transformChip(chip) {

        if (angular.isObject(chip)) {
            return chip;
        }
    }

    function querySearchDeferred(query) {
        var deferred = $q.defer();


        setTimeout(function() {

            var proArray = [
                {name: 'property'},
                {name: 'property 1'},
                {name: 'property 2'},
                {name: 'property 3'},
                {name: 'property 4'},
                {name: 'property 5'},
                {name: 'property 6'}
            ];
            if (query) {
                deferred.resolve(filterFilter(proArray, query));
            } else {
                deferred.reject([{name: 'None'}]);
            }
        }, 200);
        return deferred.promise;
    }*/




}
})();
/*(function () {
    'use strict';
    angular
        .module('eiffelApp', ['ngMaterial'])
        .controller('PropertyGetDetailsCtrl', DemoCtrl);
    function DemoCtrl ($timeout, $q,$rootScope) {
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
        /!**
         * Return the proper object when the append is called.
         *!/
        function transformChip(chip) {
            // If it is an object, it's already a known chip
            if (angular.isObject(chip)) {
                return chip;
            }
            // Otherwise, create a new one
            return { name: chip, type: 'new' }
        }
        /!**
         * Search for vegetables.
         *!/
        function querySearch (query) {
            var results = query ? self.vegetables.filter(createFilterFor(query)) : [];
            return results;
        }
        /!**
         * Create filter function for a query string
         *!/
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(vegetable) {
                return (vegetable._lowername.indexOf(lowercaseQuery) === 0) ||
                    (vegetable._lowertype.indexOf(lowercaseQuery) === 0);
            };
        }
        function loadVegetables() {
            var veggies = [
                {
                    'name': 'Broccoli',
                    'type': 'Brassica'
                },
                {
                    'name': 'Cabbage',
                    'type': 'Brassica'
                },
                {
                    'name': 'Carrot',
                    'type': 'Umbelliferous'
                },
                {
                    'name': 'Lettuce',
                    'type': 'Composite'
                },
                {
                    'name': 'Spinach',
                    'type': 'Goosefoot'
                }
            ];
            return veggies.map(function (veg) {
                veg._lowername = veg.name.toLowerCase();
                veg._lowertype = veg.type.toLowerCase();
                return veg;
            });
        }
    }
})();*/
