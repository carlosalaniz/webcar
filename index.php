<?php
error_reporting(-1);
ini_set('error_reporting', E_ALL);
require("./phpmqtt.php");
$file = "webcar5.log";
$message = json_encode($_GET);
file_put_contents($file, $message.',', FILE_APPEND | LOCK_EX);	
$mqtt = new phpMQTT("broker.hivemq.com", 1883, "lksdhfjhsdj-4"); //Change client name to something unique
if ($mqtt->connect()) {
	$mqtt->publish("92361f002671/mazda01",$message,0);
	$mqtt->close();
}

echo "OK!";