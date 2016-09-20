app.controller('AddEquipmentController', function ($scope, SPACRUDService) {
    //$scope.Id = 0;
    //$scope.EquipmentName = "initial";

    $scope.save = function () {
        var Equipment = {
            Id: $scope.Id,
            EquipmentName: $scope.EquipmentName

        };

        
        var promisePost = SPACRUDService.postEquipment(Equipment);


        promisePost.then(function (pl) {
            alert("Equipment Saved Successfully.");
        },
              function (errorPl) {
                  alert("Equipment ID Already exist. Please enter a Unique ID");
              });

    };

});