//app.js
var fibonacci = angular.module('fibonacci', []);

fibonacci.controller("find_fib", find_fib);

function find_fib($scope) {

    $scope.find_fib_num = function() {
        var next = 1,
            last = 0,
            temp = 0;
        $scope.max;
        $scope.fib = 0;
        $scope.fib_seq = new Array();
        while (last < $scope.max) {
            temp = next + last;
            $scope.fib_seq.push(last);
            console.log($scope.fib_seq);
            if (last % 2 === 0 && last < $scope.max) {
                $scope.fib += last;

            }
            next = last;
            last = temp;

        }
    }

}