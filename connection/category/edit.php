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
    if (isset($user['name'])) {
        $name = $user['name'];

        // Perform the database update
        $sql = "UPDATE categories SET name = '$name' WHERE id = '$id'";

        // Prepare and execute the SQL statement
        $stmt = $conn->prepare($sql);
        if ($stmt->execute()) {
            echo json_encode(array("message" => "Category updated successfully."));
        } else {
            echo json_encode(array("message" => "Category update failed."));
        }
    } else {
        echo json_encode(array("message" => "Missing 'name' field in the JSON data."));
    }
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
