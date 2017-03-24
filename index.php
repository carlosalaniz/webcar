<?php
$file = "webcar4.log";
$message = json_encode($_GET);
file_put_contents($file, $message.',', FILE_APPEND | LOCK_EX);

$require("./phpmqtt.php");
	
$mqtt = new phpMQTT("broker.hivemq.com", 1883, "lksdhfjhsdj-4"); //Change client name to something unique
if ($mqtt->connect()) {
	$mqtt->publish("92361f002671/mazda01",$message,0);
	$mqtt->close();
}

echo "OK!";