<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-type: application/json");

require_once '../conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;
    $lname = $data->lname;

    $sql = "UPDATE `users` SET `lname`='$lname' WHERE `id`='$id'";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true, 'message' => 'Last name updated successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error updating Last name: ' . $conn->error]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}

$conn->close();
?>
