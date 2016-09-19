app.controller('ShowAllEquipmentsController', function ($scope, $location, SPACRUDService, ShareData) {
    loadAllEquipmentsRecords();
    
    function loadAllEquipmentsRecords() {
        
        var promiseGetEquipment = SPACRUDService.getEquipments();
        promiseGetEquipment.then(function (pl) { $scope.Equipment = pl.data },
              function (errorPl) {
                  $scope.error = errorPl;
              });
    }

    //To Edit Equipment Information  
    $scope.EditEquipment = function (Id) {
        ShareData.value = Id;
        $location.path("/EditEquipment");
    }

    //To Delete an Equipment  
    $scope.DeleteEquipment = function (Id) {
        ShareData.value = Id;
        $location.path("/DeleteEquipment");
    }
});