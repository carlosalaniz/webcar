<?php
$myfile = fopen("webcar.log", "w") or die("Unable to open file!");
foreach($POST as $k => $v){
    fwrite($myfile, json_encode([$k=>$v]));
}
fclose($myfile);
echo "OK!";