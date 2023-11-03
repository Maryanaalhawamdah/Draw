<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");



if (isset($_GET['id'])) {
   
    $id = $_GET['id'];

  echo $id;


}


if(isset($_POST)){

    $data = file_get_contents("php://input");

    $user = json_decode($data , true);
    
    $fname = ($user['fname']);
    $lname = ($user['lname']);
    $image = ($user['image']);
    $phone = ($user['phone']);

}else{
    echo 'falid ...';
}

if($name == null){

    return die ;
}




$sql = "UPDATE artists SET fname ='$fname', lname ='$lname', image ='$image' , phone='$phone'  WHERE id = '$id' ";

$conn->exec($sql);




?>


