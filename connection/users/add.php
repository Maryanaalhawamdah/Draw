<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");

if(isset($_POST)){
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);

    if(isset($user['username'])  && isset($user['email']) && isset($user['password'])&& isset($user['dob'])&& isset($user['phone'] && isset($user['address'])&& isset($user['isAdmin'] ))) {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
        $dob = $_POST['dob'];
        $phone=$_POST['phone'];
        $address=$_POST['address'];
        $image=$_POST['image'];
        $isAdmin = 0;

        $sql = "INSERT INTO customer (username, email, password,dob,phone, address,image,  isAdmin)
        VALUES ('$username',  '$email', '$password','$dob' , '$phone', '$address', '$image' , '$isAdmin')";

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
