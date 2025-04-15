(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', function($scope)
    {
        $scope.food = "";
        $scope.totalValue = "";


        $scope.displayFoodCheck = function()
        {
            var totalFoodValue = checkLunchSize(calculateFoodItems($scope.food));
            $scope.totalValue = totalFoodValue;
        };

        function calculateFoodItems(string)
        {
            let foodItems = string.split(",");
            var count = 0;
            
            for (var i = 0; i < foodItems.length; i++)
            {
                count++;
            }
            return count;
        }

        function checkLunchSize(count)
        {
            if(count <= 3)
            {
                return "Enjoy!";
            }
            else if(count === 0)
            {
                return "Please enter data first";
            }
            else
            {
                return "Too much!";
            }   
        }
    });

})();