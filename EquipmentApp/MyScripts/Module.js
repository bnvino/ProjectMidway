var app = angular.module("ApplicationModule", ["ngRoute"]);

app.factory("ShareData", function () {
    return { value: 0 }
});

//Showing Routing  
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    debugger;
    $routeProvider.when('/ShowAllEquipments',
                        {
                            templateUrl: 'ManageEquipmentsInfo/ShowAllEquipments',
                            controller: 'ShowAllEquipmentsController'
                        });
    $routeProvider.when('/AddNewEquipment',
                        {
                            templateUrl: 'ManageEquipmentsInfo/AddNewEquipment',
                            controller: 'AddEquipmentController'
                        });
    $routeProvider.when("/EditEquipment",
                        {
                            templateUrl: 'ManageEquipmentsInfo/EditEquipment',
                            controller: 'EditEquipmentController'
                        });
    $routeProvider.when('/DeleteEquipment',
                        {
                            templateUrl: 'ManageEquipmentsInfo/DeleteEquipment',
                            controller: 'DeleteEquipmentController'
                        });


    $routeProvider.when('/ShowAllMaintenanceWorks',
                        {
                            templateUrl: 'MaintenanceWorksInfo/ShowAllMaintenanceWorks',
                            controller: 'ShowAllMaintenanceWorksController'
                        });
    $routeProvider.when('/AddNewMaintenanceWork',
                        {
                            templateUrl: 'MaintenanceWorksInfo/AddNewMaintenanceWork',
                            controller: 'AddMaintenanceWorkController'
                        });
    $routeProvider.when('/EditMaintenanceWork',
                        {
                            templateUrl: 'MaintenanceWorksInfo/EditMaintenanceWork',
                            controller: 'EditMaintenanceWorkController'
                        });
    $routeProvider.when('/DeleteMaintenanceWork',
                        {
                            templateUrl: 'MaintenanceWorksInfo/DeleteMaintenanceWork',
                            controller: 'DeleteMaintenanceWorkController'
                        });
    $routeProvider.otherwise(
                        {
                            redirectTo: '/'
                        });
    //$locationProvider.html5Mode(true).hashPrefix('!')
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);