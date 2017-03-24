<?php
$c = new Mosquitto\Client;
$c->onConnect(function() use ($c) {
    $c->publish('92361f002671/mazda01', 'Hello', 2);
});

$client->connect("broker.hivemq.com", 1883);
for ($i = 0; $i < 100; $i++) {
    // Loop around to permit the library to do its work
    $c->loop(1);
}

echo "Finished\n";