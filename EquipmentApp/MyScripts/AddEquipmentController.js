app.controller('AddEquipmentController', function ($scope, SPACRUDService) {
    $scope.Id = 0;
    //$scope.EquipmentName = "initial";

    $scope.save = function () {
        var Equipment = {
            Id: $scope.Id,
            EquipmentName: $scope.EquipmentName
            //EquipmentName: $scope.EquipmentName

        };

        
        var promisePost = SPACRUDService.postEquipment(Equipment);

        //alert(JSON.stringify(promisePost.$$state.status));

        var status = JSON.stringify(promisePost.$$state.status);

        if (status == 1)
        {
            alert("Equipment Saved Successfully.");
        }

        else
        {
            alert("Equipment ID already exist. Please enter a unique Id");
        }

        //promisePost.then(function (pl) {
        //    alert("Equipment Saved Successfully.");
        //},
        //      function (errorPl) {
        //          $scope.error = 'failure loading Equipment', errorPl;
        //      });

    };

});