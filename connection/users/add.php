<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");

if(isset($_POST)){
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);

    if(isset($user['fname']) && isset($user['lname']) && isset($user['email']) && isset($user['password']) && isset($user['address']) && isset($user['phone'])) {
        $fname = $user['fname'];
        $lname = $user['lname'];
        $email = $user['email'];
        $password = $user['password'];
        $address = $user['address'];
        $phone = $user['phone'];
        $isAdmin = 0;

        $sql = "INSERT INTO customer (fname, lname, email, password, address, phone, isAdmin)
        VALUES ('$fname', '$lname', '$email', '$password', '$address', '$phone', '$isAdmin')";

        // Prepare and execute the SQL statement
        $stmt = $conn->prepare($sql);
        if ($stmt->execute()) {
            echo json_encode(array("message" => "Data inserted successfully."));
        } else {
            echo json_encode(array("message" => "Data insertion failed."));
        }
    } else {
        echo json_encode(array("message" => "Invalid data."));
    }
} else {
    echo json_encode(array("message" => "Invalid request."));
}

?>
