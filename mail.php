<?php
$name=filter_input(INPUT_POST,'name',FILTER_SANITIZE_STRING);
$companyName=filter_input(INPUT_POST,'companyName',FILTER_SANITIZE_STRING);
$pickedServices=filter_input(INPUT_POST,'pickedServices',FILTER_SANITIZE_STRING);
$mes=filter_input(INPUT_POST,'message',FILTER_SANITIZE_STRING);
$tel=filter_input(INPUT_POST,'tel',FILTER_SANITIZE_STRING);
$mail=filter_input(INPUT_POST,'email',FILTER_VALIDATE_EMAIL);
if(!$mail){
    header('HTTP/1.0 400 Bad Request',400);
    return 'invalid email';
}
$to = 'chechkovania@gmail.com';
// емайл получателя

$subject = "Mail from site";
// тема письма

$message = "Пользователь {$name},<br> компания {$companyName}, <br>";
$message.="email: {$mail}, <br> телефон {$tel} <br>";
$message.="<br>";
$message.="Выбраный сервис: {$pickedServices}<br>";
$message.="Сообщение: ".striptags($mes);
// текст сообщения, здесь вы можете вставлять таблицы, рисунки, заголовки, оформление цветом и т.п.

$mailheaders = "Content-type:text/html;charset=UTF-8";
// формат письма html

$mailheaders .= "From: SiteRobot <noreply@siterobot.ru>rn";
$mailheaders .= "Reply-To: noreply@siterobot.rurn";
// емайл отправителя и емайл для ответа

mail($to, $subject, $message, $mailheaders);
echo json_encode(['success'=>'mail send']);
return;