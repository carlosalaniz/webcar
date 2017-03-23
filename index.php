<?php
$file = "webcar.log";
foreach($_POST as $k => $v){
    echo "POST_".json_encode([$k=>$v]).'\n';
    $message = "POST_".json_encode([$k=>$v]);
    file_put_contents($file, $message, FILE_APPEND | LOCK_EX);
}
foreach($_GET as $k => $v){
    echo "GET_".json_encode([$k=>$v]).'\n';
    $message = "GET_".json_encode([$k=>$v]);    
     file_put_contents($file, $message, FILE_APPEND | LOCK_EX);
}
echo "OK!";