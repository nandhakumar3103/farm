<?php
$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];

$conn = new mysqli('localhost', 'root','','farm');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt=$conn->prepare("insert into login(name,email,password) values(?,?,?)");
    $stmt->bind_param("sss",$name,$email,$password);
    $stmt->execute();
    echo"Registered Successfully....";
    $stmt->close();
    $conn->close();
}
?>