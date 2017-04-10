<?php
// 生成一个PHP数组
var_dump($_POST);
echo "hello world";
$data = array();
$data['name'] = $_POST['name'];
$data['mobile'] = $_POST['mobile'];
$data['email'] = $_POST['email'];

// 把PHP数组转成JSON字符串
$json_string = json_encode($data);
 
// 写入文件
file_put_contents('data.json', $json_string);
?>