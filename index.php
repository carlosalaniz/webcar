<?php
$file = "webcar3.log";
file_put_contents($file, PHP_EOL.PHP_EOL.PHP_EOL, FILE_APPEND | LOCK_EX);
foreach($_POST as $k => $v){
    $message = json_encode([$k=>$v]).PHP_EOL;
    file_put_contents($file, $message, FILE_APPEND | LOCK_EX);
}
foreach($_GET as $k => $v){
    $message = json_encode([$k=>$v]).PHP_EOL;
    file_put_contents($file, $message, FILE_APPEND | LOCK_EX);
}
echo "OK!";