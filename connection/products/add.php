<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data from the request body
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);

    // Check if all required fields are present
    if (
        isset($user['name']) &&
        isset($user['image']) &&
        isset($user['description']) &&
        isset($user['price']) &&
        isset($user['categories'])
    ) {
        // Extract data
        $name = $user['name'];
        $image = $user['image'];
        $description = $user['description'];
        $price = $user['price'];
        $categories = $user['categories'];

        // Prepare and execute the SQL statement
        $sql = "INSERT INTO products (name, image, description, price, categories) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssi", $name, $image, $description, $price, $categories);

        if ($stmt->execute()) {
            echo json_encode(array("message" => "Product inserted successfully."));
        } else {
            echo json_encode(array("message" => "Product insertion failed.", "error" => $stmt->error));
        }
    } else {
        echo json_encode(array("message" => "Missing or invalid data in the request."));
    }
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
