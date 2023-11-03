<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);

    if (isset($user['name'])) {
        $name = $user['name'];

        try {
            $stmt = $conn->prepare("INSERT INTO categories (name) VALUES (:name)");
            $stmt->bindParam(':name', $name);
            $stmt->execute();

            $response = array("message" => "Category added successfully");
            echo json_encode($response);
        } catch (PDOException $e) {
            $response = array("error" => "Database error: " . $e->getMessage());
            echo json_encode($response);
        }
    } else {
        $response = array("error" => "Invalid data");
        echo json_encode($response);
    }
} else {
    $response = array("error" => "Invalid request method");
    echo json_encode($response);
}
?>
