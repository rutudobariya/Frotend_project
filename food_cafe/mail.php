<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST["send"]))
{  

try {
 
    require 'Exception.php';
    require 'PHPMailer.php';
    require 'SMTP.php';
    $mail = new PHPMailer(true); 
    //Server settings
    $mail->SMTPDebug = false;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'bkpandey.pandey@gmail.com';                     //SMTP username
    $mail->Password   = 'luicudfmkjxmwovx';                               //SMTP password
    $mail->SMTPSecure = "TLS";            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    //Recipients
    $mail->setFrom($_POST["email"], 'Enquiry contact details');
    $mail->addAddress('bkpandey.pandey@gmail.com', 'admin');     //Add a recipient

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Enquiry contact details';
    $mail->Body    = "<img src='https://i.gifer.com/76hA.gif' style='width:90%; hight:100px'>"."<br>"."<h2>The customer form data details via contact us Form</h2>"."customer firstname is :".$_POST["firstname"]."<br>"."customer lastname is :".$_POST["lastname"]."<br>"."customer email is :".$_POST["email"]."<br>"."customer subject is :".$_POST["subject"]."<br>"."customer message is :".$_POST["message"]."<br>"."For more details contact with us on (+91)9998003879"."<h4>for more visit us on : <a href='https://www.tops-int.com'>https://www.tops-int.com</a></h4>";
    
    $mail->send();
    echo "<script>
    alert('Thanks for contact with us we will get your details in our emails one of our admin will contact with you Soon')
    window.location='contact.html';
    </script>";
}

catch (Exception $e) 
{
    
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

}
?>