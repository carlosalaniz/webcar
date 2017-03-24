<?php
$file = "webcar4.log";
$message = json_encode($_GET);
file_put_contents($file, $message.',', FILE_APPEND | LOCK_EX);

$client = new Mosquitto\Client();
$client->connect("broker.hivemq.com", 8000, 5);
while (true) {
	$client->loop();
	$mid = $client->publish('92361f002671/mazda01', message, 2, 0);
	$client->loop();
}
$client->disconnect();
unset($client);
echo "OK!";