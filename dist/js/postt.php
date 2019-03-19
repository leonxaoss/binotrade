<?php

$name = $_POST['fname']; // собираем введенные данные и записываемв переменные
$phone = $_POST['phone'];
$message = $_POST['advanced'];
$mail = $_POST['mail'];

if (!empty($name))
{
    $text .= "Имя: $name \r\n";
}
if (!empty($phone))
{
    $text .= "Телефон: $phone \r\n";
}
if (!empty($mail))
{
    $text .= "Емайл: $mail \r\n";
}
if (!empty($message))
{
    $text .= "Сообщение: $message \r\n";
}

$file = fopen ("message.txt", "a+"); //открываем для перезаписи файл message.txt лежаший в одной папке с текущей страницей
fwrite ($file,$text); // пишем в файл
fclose ($file); // закрываем файл