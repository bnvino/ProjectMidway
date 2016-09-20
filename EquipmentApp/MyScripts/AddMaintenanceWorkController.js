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


        var date = new Date($scope.Date);
        var dateMod = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

        var time = new Date($scope.Time);
        var timeMod = ("0" + time.getHours()).slice(-2) + ':' + ("0" + time.getMinutes()).slice(-2);

        var timeMod1 = time.toLocaleTimeString();

        var MaintenanceWork = {
            Id: $scope.Id,
            Date: dateMod,
            Time: timeMod,
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
                  alert("Maintenance Work ID Already exist. Please enter a Unique ID");
              });

    };

});