<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

$dataArr = json_decode($HTTP_RAW_POST_DATA, true);
$body = "Email или телефон: ". htmlspecialchars(trim($dataArr['emailTel']))."\n";
($dataArr['name'] != '' && $dataArr['name'] != null)? $body .= "Имя: ". htmlspecialchars(trim($dataArr['name']))."\n":$body .= "" ;
($dataArr['message'] != '' && $dataArr['message'] != null)? $body .= "Текст сообщения: ". htmlspecialchars(trim($dataArr['message']))."\n":$body .= "" ;
mail("krbearing@ukr.net",
    "Письмо с сайта Krivbaspodshipnik",
    $body,
    "From: krivbaspodshipnik.com.ua@gmail.com");
?>
