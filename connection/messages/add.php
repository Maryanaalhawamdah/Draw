<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);

    $clientName = $user['clientName'];
    $email = $user['email'];
    $messages = $user['messages'];
   

    // Prepare and execute the SQL statement
    $sql = "INSERT INTO messeges (clientName, email, messages) VALUES ('$clientName' ,'$email' , '$messages' )";

    try {
        $conn->exec($sql);
        echo json_encode(array("message" => "Message inserted successfully."));
    } catch (PDOException $e) {
        echo json_encode(array("message" => "Data insertion failed: " . $e->getMessage()));
    }
} else {
    echo json_encode(array("message" => "Invalid request."));
}
?>
