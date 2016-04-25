<?php
$subject=$_POST['name'];
$email=$_POST['email'];
$comments=$_POST['comments'];

$header .= 'From: '.$email.'' . "\r\n";

//echo 'subject: '.$subject.'<br> email: '.$email.'<br> msg: '.$message; 

$mail = mail("stars@cs.iit.edu", $subject, $comments, $header); 

if($mail){
  echo "Thank you for using our mail form";
}else{
  echo "Mail sending failed."; 
}
?>
