app.controller("EditMaintenanceWorkController", function ($scope, $location, ShareData, SPACRUDService) {
    getMaintenanceWork();

    function getMaintenanceWork() {
        var promiseGetMaintenanceWork = SPACRUDService.getMaintenanceWork(ShareData.value);

        promiseGetMaintenanceWork.then(function (pl) {
            $scope.MaintenanceWork = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Maintenance Work', errorPl;
              });
    }

    $scope.save = function () {
        var MaintenanceWork = {
            Id: $scope.MaintenanceWork.id,
            Date: $scope.MaintenanceWork.date,
            Time: $scope.MaintenanceWork.time,
            WorkDescription: $scope.MaintenanceWork.workDescription,
            EquipmentId: $scope.MaintenanceWork.equipmentId,
            TimeTaken: $scope.MaintenanceWork.timeTaken
        };



        var promisePutMaintenanceWork = SPACRUDService.putMaintenanceWork($scope.MaintenanceWork.id, MaintenanceWork);
        promisePutMaintenanceWork.then(function (pl) {
            $location.path("/ShowAllMaintenanceWorks");
        },
              function (errorPl) {
                  $scope.error = 'failure Saving MaintenanceWork', errorPl;
              });
    };

});