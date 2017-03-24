var app = angular.module('myApp', ['angularPaho']);

app.controller('myCtrl', ['$scope', 'MqttClient', function($scope, MqttClient) {

    var nameMap = JSON.parse('{"eml":"Carlos.glvn1993@gmail.com","v":"8","session":"1490347152097","id":"65f30e7cbf52901024604bedbb9e6e1a","time":"1490347156997","userUnitff1005":"°","userUnitff1006":"°","userUnitff1001":"mph","userUnitff1007":"","userUnit47":" ","userShortName47":"A THR2","userFullName47":"Absolute Throttle Position B","userUnit49":" ","userShortName49":"PedalD","userFullName49":"Accelerator PedalPosition D","userUnit4a":" ","userShortName4a":"PedalE","userFullName4a":"Accelerator PedalPosition E","userUnit46":"°F","userShortName46":"Air temp","userFullName46":"Ambient air temp","userUnit31":"miles","userShortName31":"MIL Off","userFullName31":"Distance travelled since codes cleared","userUnit05":"°F","userShortName05":"Coolant","userFullName05":"Engine Coolant Temperature","userUnit04":" ","userShortName04":"Load","userFullName04":"Engine Load","userUnit0c":"rpm","userShortName0c":"Revs","userFullName0c":"Engine RPM","userUnit2f":" ","userShortName2f":"Fuel","userFullName2f":"Fuel Level (From Engine ECU)","userUnitff1239":"ft","userShortNameff1239":"GPS Acc","userFullNameff1239":"GPS Accuracy","userUnitff1010":"ft","userShortNameff1010":"GPS Height","userFullNameff1010":"GPS Altitude","userUnitff123b":"°","userShortNameff123b":"GPS Brng","userFullNameff123b":"GPS Bearing","userUnitff1007":"°","userShortNameff1007":"GPS Brng","userFullNameff1007":"GPS Bearing","userShortNameff1006":"GPSLat","userFullNameff1006":"GPS Latitude","userShortNameff1005":"GPSLon","userFullNameff1005":"GPS Longitude","userUnitff123a":"","userShortNameff123a":"GPS Sat","userFullNameff123a":"GPS Satellites","userUnitff1237":"mph","userShortNameff1237":"Spd Diff","userFullNameff1237":"GPS vs OBD Speed difference","userUnitff1226":"hp","userShortNameff1226":"HP","userFullNameff1226":"Horsepower (At the wheels)","userUnit0f":"°F","userShortName0f":"Intake","userFullName0f":"Intake Air Temperature","userUnit45":" ","userShortName45":"R THR","userFullName45":"Relative Throttle Position","userUnit1f":"s","userShortName1f":"RunTime","userFullName1f":"Run time since engine start","userShortNameff1001":"GPS Spd","userFullNameff1001":"Speed (GPS)","userUnit0d":"mph","userShortName0d":"Speed","userFullName0d":"Speed (OBD)"}');

    $scope.getName = function(key){
            // console.log(nameMap);
            if(key[0] !== 'k') return key;
            var kk = key.substring(1);
            if(kk.length < 2) kk = "0"+kk;
            var objKey = 'userFullName'+ kk;
            console.log(objKey);
            
            console.log(nameMap[objKey]);
            return (nameMap[objKey] == null)? key : nameMap[objKey];
    }
    $scope.getUnit = function(key){
            // console.log(nameMap);
            var kk = key.substring(1);
            if(kk.length < 2) kk = "0"+kk;
            var objKey = 'userUnit'+ kk;
            console.log(objKey);
            
            console.log(nameMap[objKey]);
            return nameMap[objKey] 
    }


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
        $scope.lastMessage = JSON.parse(message.payloadString);
        $scope.$apply();
    });

}]);