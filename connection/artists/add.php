<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data from the request body
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);

    // Check if required fields exist in the JSON data
    if (isset($user['fname'], $user['lname'], $user['image'], $user['phone'])) {
        $fname = $user['fname'];
        $lname = $user['lname'];
        $image = $user['image'];
        $phone = $user['phone'];

        // Perform the database insertion
        $sql = "INSERT INTO artists (fname, lname, image,phone) 
                VALUES ('$fname', '$lname', '$image', '$phone')";
        
        // Prepare and execute the SQL statement
        $stmt = $conn->prepare($sql);
        if ($stmt->execute()) {
            echo json_encode(array("message" => "Data inserted successfully."));
        } else {
            echo json_encode(array("message" => "Data insertion failed."));
        }
    } else {
        echo json_encode(array("message" => "Missing required fields in the JSON data."));
    }
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
