<?php
$file = "webcar.log";
foreach($_POST as $k => $v){
    $message = "POST_".json_encode([$k=>$v]).'\n';
    file_put_contents($file, $message, FILE_APPEND | LOCK_EX);
}
foreach($_GET as $k => $v){
    $message = "GET_".json_encode([$k=>$v]).'\n';
    file_put_contents($file, $message, FILE_APPEND | LOCK_EX);
}
echo "OK!";