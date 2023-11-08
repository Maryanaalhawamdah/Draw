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
    $product = json_decode($data, true);

    // Check if required fields exist in the JSON data
    if (isset($product['name']) && isset($product['image']) && isset($product['description']) && isset($product['price']) && isset($product['product-type'])) {
        $name = $product['name'];
        $image = $product['image'];
        $description = $product['description'];
        $price = $product['price'];
        $producttype = $product['product-type'];

        // Perform the database insert
        $sql = "INSERT INTO products (name, image, description, price, product_type)
        VALUES ('$name', '$image', '$description', '$price', '$producttype')";

        // Prepare and execute the SQL statement
        $stmt = $conn->prepare($sql);
        if ($stmt->execute()) {
            echo json_encode(array("message" => "Product inserted successfully."));
        } else {
            echo json_encode(array("message" => "Product insertion failed."));
        }
    } else {
        echo json_encode(array("message" => "Missing required fields in the JSON data."));
    }
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
