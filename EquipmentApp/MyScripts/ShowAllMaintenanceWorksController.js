app.controller('ShowAllMaintenanceWorksController', function ($scope, $location, SPACRUDService, ShareData) {
    loadAllMaintenanceWorksRecords();

    function loadAllMaintenanceWorksRecords() {

        var promiseGetMaintenanceWorks = SPACRUDService.getMaintenanceWorks();
        promiseGetMaintenanceWorks.then(function (pl) { $scope.MaintenanceWork = pl.data },
              function (errorPl) {
                  $scope.error = errorPl;
              });
    }

    //To Edit Equipment Information  
    $scope.EditMaintenanceWork = function (Id) {
        ShareData.value = Id;
        $location.path("/EditMaintenanceWork");
    }

    //To Delete an Equipment  
    $scope.DeleteMaintenanceWork = function (Id) {
        ShareData.value = Id;
        $location.path("/DeleteMaintenanceWork");
    }
});