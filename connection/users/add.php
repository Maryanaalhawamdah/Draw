<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data from the request body
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);

    // Check if the required fields are set in the JSON data
    if (
        isset($user['username']) &&
        isset($user['email']) &&
        isset($user['password']) &&
        isset($user['dob']) &&
        isset($user['phone']) &&
        isset($user['address']) &&
        isset($user['image'])
    ) {
        $username = $user['username'];
        $email = $user['email'];
        $password = password_hash($user['password'], PASSWORD_BCRYPT);
        $dob = $user['dob'];
        $phone = $user['phone'];
        $address = $user['address'];
        $image = $user['image'];
        $isAdmin = 0;

        // Prepare the SQL statement with placeholders
        $sql = "INSERT INTO customer (username, email, password, dob, phone, address, image, isAdmin)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        // Prepare and execute the SQL statement with placeholders
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssssi", $username, $email, $password, $dob, $phone, $address, $image, $isAdmin);

        if ($stmt->execute()) {
            echo json_encode(array("message" => "Data inserted successfully."));
        } else {
            echo json_encode(array("message" => "Data insertion failed."));
        }
    } else {
        echo json_encode(array("message" => "Missing or invalid data in the request."));
    }
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
