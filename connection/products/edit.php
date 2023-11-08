<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");

if (isset($_GET['id'])) {
    $id = $_GET['id'];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents("php://input");
    $product = json_decode($data, true);

    // Check if the required fields exist in the JSON data
    if (isset($product['name']) && isset($product['image']) && isset($product['description']) && isset($product['price'])) {
        $name = $product['name'];
        $image = $product['image'];
        $description = $product['description'];
        $price = $product['price'];

        // Construct and execute the SQL update statement
        $sql = "UPDATE products SET name = '$name', image = '$image', description = '$description', price = '$price' WHERE id = '$id'";
        $conn->exec($sql);

        echo json_encode(array("message" => "Product updated successfully."));
    } else {
        echo json_encode(array("message" => "Missing required fields in the JSON data."));
    }
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
