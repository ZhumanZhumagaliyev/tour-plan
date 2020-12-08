<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$nameModal = $_POST['nameModal'];
$nameFooter = $_POST['nameFooter'];

$phoneModal = $_POST['phoneModal'];
$phoneFooter = $_POST['phoneFooter'];

$message = $_POST['message'];

$emailModal = $_POST['emailModal'];
$emailSub = $_POST['emailSub'];

$subscribeBtn = $_POST['subscribeBtn'];
$footerBtn = $_POST['footerBtn'];
$modalBtn = $_POST['modalBtn'];


if (isset($modalBtn)) {
$title = "New Booking";
$body = "
<b>Name:</b> $nameModal<br>
<b>Phone:</b> $phoneModal<br>
<b>E-mail:</b> $emailModal<br>
<b>Message:</b><br>$message
";
} elseif (isset($footerBtn)) {
$title = "New Appeal";
$body = "
<b>Name:</b> $nameFooter<br>
<b>Phone:</b> $phoneFooter<br>
<b>Message:</b><br>$message
";
}else {
$title = "New Subscriber";
$body = "
<b>E-mail:</b> $emailSub<br>
";
};

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'learnfast@inbox.ru'; // Логин на почте
    $mail->Password   = 'zzm98590'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('learnfast@inbox.ru', 'Best Tour Plan'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('zhuman.zhumagaliyev@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

header('Location: thanks.html');







