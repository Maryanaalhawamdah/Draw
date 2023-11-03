
<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");


include_once("../conn.php");


    
    $query = "SELECT * FROM orders";
    $ret = $conn->query($query);
    $data = $ret->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
 
?>