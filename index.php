<?php
$myfile = fopen("webcar.log", "w") or die("Unable to open file!");
foreach($_POST as $k => $v){
    fwrite($myfile, "POST_".json_encode([$k=>$v]));
}

foreach($_GET as $k => $v){
    fwrite($myfile, "GET_".json_encode([$k=>$v]));
}
fclose($myfile);
echo "OK!";