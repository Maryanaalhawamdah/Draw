<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-type: application/json");

require_once '../conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    // var_dump($data);
    $id = $data->id;
    $oldPassword = $data->oldPassword;
    $newPassword = $data->newPassword;


    $sql = "SELECT `password` FROM `users` WHERE `id`='$id'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $hashedPassword = $row['password'];
        // echo $hashedPassword;
        if (password_verify($oldPassword, $hashedPassword)) {
            // Hash the new password
            $newHashedPassword = password_hash($newPassword, PASSWORD_BCRYPT);
            $updateSql = "UPDATE `users` SET `password`='$newHashedPassword' WHERE `id`='$id'";
            if ($conn->query($updateSql)) {
                echo json_encode(['success' => 'true', 'message' => 'Password updated successfully']);
            } else {
                echo json_encode(['success' => 'false', 'message' => 'Password update failed']);
            }
        } else {
            echo json_encode(['success' => 'false', 'message' => 'Old password is incorrect']);
        }
    } else {
        echo json_encode(['success' => 'false', 'message' => 'User not found']);
    }
} else {
    echo json_encode(['success' => 'false', 'message' => 'Invalid request method']);
}

$conn->close();
?>