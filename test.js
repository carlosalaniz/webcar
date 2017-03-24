var app = angular.module('myApp', ['angularPaho']);

app.controller('myCtrl', ['$scope', 'MqttClient', function($scope, MqttClient) {
 var ip = "broker.hivemq.com";
    var port = "8000";
    var id = "clientId-yzUBL20ktx";
    $scope.lastMessage = {};
    MqttClient.init(ip, port, id);
    MqttClient.connect({onSuccess: successCallback});
    function successCallback() {
      MqttClient.subscribe('92361f002671/mazda01');
    }

    $scope.$on('message-arrived', function(event, args) {
        var message = args.lastMessage;
        console.log(message.payloadString);
        $scope.lastMessage = JSON.parse(message.payloadString);
        $scope.$apply();
    });

}]);