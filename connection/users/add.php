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
        isset($user['clientName']) &&
        isset($user['email']) &&
        isset($user['password']) &&
        isset($user['phone']) &&
        isset($user['address']) &&
        isset($user['image'])
    ) {
        // Assign values to variables
        $clientName = $user['clientName'];
        $email = $user['email'];
        $password = password_hash($user['password'], PASSWORD_BCRYPT);
        $phone = $user['phone'];
        $address = $user['address'];
        $image = $user['image'];
        $isAdmin = 0;

        // Prepare the SQL statement with placeholders
        $sql = "INSERT INTO users (clientName, email, password,  phone, address, image, isAdmin)
        VALUES (?, ?, ?, ?, ?, ?, ?)";

        // Prepare and execute the SQL statement with placeholders
        $stmt = $conn->prepare($sql);
        // Assuming 'dob' is a required column in your table; adjust the data types accordingly
        $stmt->bind_param("sssssss", $clientName, $email, $password, $dob, $phone, $address, $image, $isAdmin);
        
        if ($stmt->execute()) {
            echo json_encode(array("message" => "Data inserted successfully."));
        } else {
            echo json_encode(array("message" => "Data insertion failed.", "error" => $stmt->error));
        }
    } else {
        echo json_encode(array("message" => "Missing or invalid data in the request."));
    }
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
