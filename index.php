<?php
$file = "webcar2.log";
file_put_contents($file, PHP_EOL.PHP_EOL.PHP_EOL, FILE_APPEND | LOCK_EX);

    $message = json_encode($_GET).PHP_EOL;
    file_put_contents($file, $message, FILE_APPEND | LOCK_EX);

echo "OK!";