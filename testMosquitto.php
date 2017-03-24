<?php
require("./phpmqtt.php");
	
$mqtt = new phpMQTT("broker.hivemq.com", 
1883, "lksdhfjhsdj-4"); //Change client name to something unique
if ($mqtt->connect()) {
	$mqtt->publish("92361f002671/mazda01","Hello World! at ".date("r"),0);
	$mqtt->close();
}
