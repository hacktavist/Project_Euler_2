//app.js
var fibonacci = angular.module('fibonacci', []);

fibonacci.controller("find_fib", find_fib);

function find_fib($scope) {

    $scope.find_fib_num = function() {
        var next = 1,
            last = 0,
            temp = 0,
            fib_seq = [];
        $scope.max;
        $scope.fib = 0;
        $scope.fib_seq_str = '';
        while (last < $scope.max) {
            temp = next + last;
            fib_seq.push(last);
            console.dir(fib_seq);
            if (last % 2 === 0 && last < $scope.max) {
                $scope.fib += last;

            }
            next = last;
            last = temp;

        }
        $scope.fib_seq_str = fib_seq.join();
        console.dir($scope.fib_seq_str);
    }

}