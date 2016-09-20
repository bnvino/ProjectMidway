app.controller('AddMaintenanceWorkController', function ($scope,SPACRUDService) {
    //$scope.Id = 0;
    //$scope.EquipmentName = "initial";

    loadAllEquipmentsRecords();

    function loadAllEquipmentsRecords() {

        var promiseGetEquipment = SPACRUDService.getEquipments();
        promiseGetEquipment.then(function (pl) { $scope.Equipment = pl.data },
              function (errorPl) {
                  $scope.error = errorPl;
              });
    }

    $scope.save = function () {
        var MaintenanceWork = {
            Id: $scope.Id,
            Date: $scope.Date,
            Time: $scope.Time,
            WorkDescription: $scope.WorkDescription,
            EquipmentId: $scope.EquipmentId,
            TimeTaken: $scope.TimeTaken

        };
        

        var promisePost = SPACRUDService.postMaintenanceWork(MaintenanceWork);
        //alert(promisePost);

        promisePost.then(function (pl) {
            alert("Maintenance Work Saved Successfully.");
        },
              function (errorPl) {
                  $scope.error = 'failure saving Maintenance Work', errorPl;
              });

    };

});