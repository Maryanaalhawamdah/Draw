<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);

    $fname = $user['fname'];
    $lname = $user['lname'];
    $email = $user['email'];
    $password = $user['password'];
    $address = $user['address'];
    $phone = $user['phone'];
    $isAdmin = 1;

    $sql = "INSERT INTO customer (fname, lname, email, password, phone, address, isAdmin) 
            VALUES ('$fname', '$lname', '$email', '$password', '$phone', '$address', '$isAdmin')";

    try {
        $conn->exec($sql);
        echo json_encode(array("message" => "Data inserted successfully."));
    } catch (PDOException $e) {
        echo json_encode(array("message" => "Data insertion failed: " . $e->getMessage()));
    }
} else {
    echo json_encode(array("message" => "Invalid request."));
}
?>
