app.service("SPACRUDService", function ($http) {

    //Read all Equipments  
    this.getEquipments = function () {

        return $http.get("/api/ManageEquipmentsInfoAPI");
    };

    //Function to Read Equipment by Equipment ID  
    this.getEquipment = function (id) {
        return $http.get("/api/ManageEquipmentsInfoAPI/" + id);
    };

    //Function to create new Equiment  
    this.postEquipment = function (Equipment) {
        var request = $http({
            method: "post",
            url: "/api/ManageEquipmentsInfoAPI",
            data: Equipment
        });
        //request.success(function (msg) {

        //    alert(JSON.stringify(request));//"Request Success: " + msg);
        //});
        //alert(JSON.stringify(request));
        //request.fail(function (jqXHR, textStatus) {
        //    alert(JSON.stringify(request));
        //    //alert("Request failed: " + textStatus);
        //});
        return request;
    };

    //Edit Equipment By ID   
    this.putEquipment = function (id, Equipment) {
        var request = $http({
            method: "put",
            url: "/api/ManageEquipmentsInfoAPI/" + id,
            data: Equipment
        });
        return request;
    };

    //Delete Equipment By Equipment ID  
    this.deleteEquipment = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/ManageEquipmentsInfoAPI/" + id
        });
        return request;
    };



    //Read all MaintenanceWorks
    this.getMaintenanceWorks = function () {

        return $http.get("/api/MaintenanceWorksInfoAPI");
    };

    //Function to Read Equipment by MaintenanceWork ID  
    this.getMaintenanceWork = function (id) {
        return $http.get("/api/MaintenanceWorksInfoAPI/" + id);
    };

    //Function to create new Maintenance Work 
    this.postMaintenanceWork = function (MaintenanceWork) {
        var request = $http({
            method: "post",
            url: "/api/MaintenanceWorksInfoAPI",
            data: MaintenanceWork
        });
        return request;
    };

    //Edit Maintenace Work By ID   
    this.putMaintenanceWork = function (id, MaintenanceWork) {
        var request = $http({
            method: "put",
            url: "/api/MaintenanceWorksInfoAPI/" + id,
            data: MaintenanceWork
        });
        return request;
    };

    //Delete Equipment By Maintenance Work ID 
    this.deleteMaintenanceWork = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/MaintenanceWorksInfoAPI/" + id
        });
        return request;
    };
});