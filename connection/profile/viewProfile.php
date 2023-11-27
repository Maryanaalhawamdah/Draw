<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");
require("../conn.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $id=$data->id;
    $sql ="SELECT * FROM `users` WHERE `id`='$id' ";
    $result = $conn->query($sql);
    $rows=array();
    if($result->num_rows>0){
        while($row=$result->fetch_assoc()){
            $rows[]=$row;
    }

    }
    echo json_encode($rows);
} else {
    echo json_encode(['error' => 'Invalid request method']);
}
$conn->close()
?>