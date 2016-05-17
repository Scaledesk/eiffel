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
    var vm = this;
    // The following are used in md-autocomplete
    vm.selectedItem = null;
    vm.searchText = null;
    vm.selectedPros = [];
    vm.transformChip = transformChip;

    vm.querySearchDeferred = querySearchDeferred;

    function transformChip(chip) {
        // If it is an object, it's already a known chip
        if (angular.isObject(chip)) {
            return chip;
        }
    }

    function querySearchDeferred(query) {
        var deferred = $q.defer();

        // Factory method would go below in actual example
        // The 200 millisecond delay mimics an ajax call
        setTimeout(function() {
            // hard-coded search results
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
    }
}
})();

