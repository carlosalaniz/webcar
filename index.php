<?php

$file = "webcar2.log";

$message = json_encode($_GET);
file_put_contents($file, $message,',', FILE_APPEND | LOCK_EX);
echo "OK!";