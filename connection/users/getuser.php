<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");


include_once("../conn.php");

  
   
 $id = json_encode(file_get_contents("php://input")) ;

  echo $id;

  $query = "SELECT * FROM customer WHERE id = $id";
  $ret = $conn->query($query);
  $data = $ret->fetchAll(PDO::FETCH_ASSOC);
 echo json_encode($data);

?>
