<?php

$c = new Mosquitto\Client;
$c->onConnect(function() use ($c) {
    $c->publish('mgdm/test', 'Hello', 2);
});

$c->connect('test.mosquitto.org');

for ($i = 0; $i < 100; $i++) {
    // Loop around to permit the library to do its work
    $c->loop(1);
}

echo "Finished\n";