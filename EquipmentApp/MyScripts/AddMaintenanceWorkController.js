app.controller('AddMaintenanceWorkController', function ($scope, SPACRUDService) {
    $scope.Id = 0;
    //$scope.EquipmentName = "initial";

    $scope.save = function () {
        var MaintenanceWork = {
            Id: $scope.Id,
            Date: $scope.Date,
            Time: $scope.Time,
            WorkDescription: $scope.WorkDescription,
            EquipmentId: $scope.EquipmentId,
            TimeTaken: $scope.TimeTaken
            //EquipmentName: $scope.EquipmentName

        };

        var promisePost = SPACRUDService.postMaintenanceWork(MaintenanceWork);

        promisePost.then(function (pl) {
            alert("Maintenance Work Saved Successfully.");
        },
              function (errorPl) {
                  $scope.error = 'failure saving Maintenance Work', errorPl;
              });

    };

});