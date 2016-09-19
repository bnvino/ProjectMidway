app.controller("DeleteEquipmentController", function ($scope, $location, ShareData, SPACRUDService) {

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

    $scope.delete = function () {
        var promiseDeleteEquipment = SPACRUDService.deleteEquipment(ShareData.value);

        promiseDeleteEquipment.then(function (pl) {
            $location.path("/ShowAllEquipments");
        },
              function (errorPl) {
                  $scope.error = 'failure Deleting Equipment', errorPl;
              });
    };

});