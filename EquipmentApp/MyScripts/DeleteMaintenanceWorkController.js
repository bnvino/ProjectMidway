app.controller("DeleteMaintenanceWorkController", function ($scope, $location, ShareData, SPACRUDService) {

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

    $scope.delete = function () {
        var promiseDeleteMaintenanceWork = SPACRUDService.deleteMaintenanceWork(ShareData.value);

        promiseDeleteMaintenanceWork.then(function (pl) {
            $location.path("/ShowAllMaintenanceWorks");
        },
              function (errorPl) {
                  $scope.error = 'failure Deleting Equipment', errorPl;
              });
    };

});