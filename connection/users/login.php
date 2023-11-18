<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Allow credentials (if needed)
header("Access-Control-Allow-Credentials: true");

// Specify the allowed methods for the resource
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

require_once '../conn.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->email, $data->password)) {
    $email = $data->email;
    $password = $data->password;

    // Validate user credentials (you may need to improve this based on your authentication logic)
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
    $stmt->execute([$email, $password]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        echo json_encode(["success" => true, "message" => "Login successful"]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid email or password"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
}
