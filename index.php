<?php

$file = "webcar2.log";
if(!file_exists('./'.$file)){
    file_put_contents($file, '[' ,  FILE_APPEND | LOCK_EX);
}

$message = json_encode($_GET);
file_put_contents($file, $message,',', FILE_APPEND | LOCK_EX);
echo "OK!";