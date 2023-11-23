<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data from the request body
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);

       
        $name = $user['name'];
        $image = $user['image'];
        $description = $user['description'];
        $price = $user['price'];
        $categories = $user['categories'];

        // Prepare and execute the SQL statement
        $sql = "INSERT INTO products (name, image, description, price, categories) VALUES ('$name' ,'$image' , '$description' ,'$price' ,'$categories')";

        try {
            $conn->exec($sql);
            echo json_encode(array("message" => "Data inserted successfully."));
        } catch (PDOException $e) {
            echo json_encode(array("message" => "Data insertion failed: " . $e->getMessage()));
        }
    } else {
        echo json_encode(array("message" => "Invalid request."));
    }
?>
