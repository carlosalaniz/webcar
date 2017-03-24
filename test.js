var app = angular.module('myApp', ['angularPaho']);

app.controller('myCtrl', ['$scope', 'MqttClient', function($scope, MqttClient) {
 var ip = "broker.hivemq.com";
    var port = "8000";
    var id = "clientId-yzUBL20ktx";
    $scope.lastMessage = "empty";
    MqttClient.init(ip, port, id);
    MqttClient.connect({onSuccess: successCallback});
    function successCallback() {
      MqttClient.subscribe('92361f002671/mazda01');
      message = new Paho.MQTT.Message("Hello");
      message.destinationName = "92361f002671/mazda01";
      MqttClient.send(message);
    }

    $scope.$on('message-arrived', function(event, args) {
        var message = args.lastMessage;
        $scope.lastMessage = message.payloadString;
        $scope.$apply();
    });

}]);