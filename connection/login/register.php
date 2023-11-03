<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

require_once("../conn.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);

    if (
        isset($user['fname']) &&
        isset($user['lname']) &&
        isset($user['email']) &&
        isset($user['password']) &&
        isset($user['address']) &&
        isset($user['phone'])
    ) {
        $fname = $user['fname'];
        $lname = $user['lname'];
        $email = $user['email'];
        $password = $user['password'];
        $address = $user['address'];
        $phone = $user['phone'];
        $isAdmin = 0;

        $sql = "INSERT INTO customer (fname, lname, email, password, address, phone, isAdmin)
        VALUES (?, ?, ?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssssi", $fname, $lname, $email, $password, $address, $phone, $isAdmin);

        if ($stmt->rowCount() > 0) {
            // Registration was successful
            echo json_encode(['message' => 'Registration successful']);
        } else {
            // Registration failed
            echo json_encode(['message' => 'Registration failed']);
        }
    } else {
        // Invalid request method
        echo json_encode(['message' => 'Invalid request method']);
    }};
    ?>