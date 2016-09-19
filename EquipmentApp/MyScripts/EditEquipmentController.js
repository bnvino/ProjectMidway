app.controller("EditEquipmentController", function ($scope, $location, ShareData, SPACRUDService) {
    getEquipment();

    function getEquipment() {
        var promiseGetEquipment = SPACRUDService.getEquipment(ShareData.value);

        promiseGetEquipment.then(function (pl) {
            $scope.Equipment = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Equipment', errorPl;
              });
    }

    $scope.save = function () {
        var Equipment = {
            Id: $scope.Equipment.id,
            EquipmentName: $scope.Equipment.equipmentName
        };



        var promisePutEquipment = SPACRUDService.putEquipment($scope.Equipment.id, Equipment);
        promisePutEquipment.then(function (pl) {
            $location.path("/ShowAllEquipments");
        },
              function (errorPl) {
                  $scope.error = 'failure Saving Equipment', errorPl;
              });
    };

});