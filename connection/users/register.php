<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once '../conn.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->clientName, $data->email, $data->password, $data->phone, $data->address, $data->image)
) {
    $clientName = $data->clientName;
    $email = $data->email;
    $password = $data->password;
    $phone = $data->phone;
    $address = $data->address;
    $image = $data->image;

    // You should hash the password before storing it in the database
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert user data into the database
    $stmt = $pdo->prepare("INSERT INTO users (clientName, email, password, phone, address, image) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->execute([$clientName, $email, $hashedPassword, $phone, $address, $image]);

    echo json_encode(["success" => true, "message" => "Registration successful"]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
}
