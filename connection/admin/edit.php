<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");

if (isset($_GET['id'])) {
    $id = $_GET['id'];
} else {
    echo 'Missing ID parameter.';
    die(); // You may want to handle this more gracefully
}

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data from the request body
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);

    // Check if required fields exist in the JSON data
    if (isset($user['fname'], $user['lname'], $user['email'], $user['address'], $user['phone'], $user['isAdmin'])) {
        $fname = $user['fname'];
        $lname = $user['lname'];
        $email = $user['email'];
        $address = $user['address'];
        $phone = $user['phone'];
       

        // Perform the database update
        $sql = "UPDATE admin SET fname = '$fname', lname = '$lname', email = '$email', address = '$address', phone = '$phone' WHERE id = '$id'";

        // Prepare and execute the SQL statement
        $stmt = $conn->prepare($sql);
        if ($stmt->execute()) {
            echo json_encode(array("message" => "Data updated successfully."));
        } else {
            echo json_encode(array("message" => "Data update failed."));
        }
    } else {
        echo json_encode(array("message" => "Missing required fields in the JSON data."));
    }
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
