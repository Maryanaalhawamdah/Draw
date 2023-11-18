<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: multipart/form-data"); // Corrected Content-type

include_once("../conn.php");

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the required fields exist in the POST request
    if (isset($_POST['name']) && isset($_FILES['image']) && isset($_POST['description']) && isset($_POST['price']) && isset($_POST['categories'])) {
        $name = $_POST['name'];
        $description = $_POST['description'];
        $price = $_POST['price'];
        $categories = $_POST['categories'];

        // File upload handling
        $image = $_FILES['image']['name'];
        $target_dir = "path/to/your/upload/directory/";
        $target_file = $target_dir . basename($image);

        if (move_uploaded_file($_FILES['image']['tmp_name'], $target_file)) {
            // Perform the database insert
            $sql = "INSERT INTO products (name, image, description, price, categories)
            VALUES (?, ?, ?, ?, ?)";
    
            // Prepare and execute the SQL statement
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssss", $name, $image, $description, $price, $categories);

            if ($stmt->execute()) {
                echo json_encode(array("message" => "Product inserted successfully."));
            } else {
                echo json_encode(array("message" => "Product insertion failed.", "error" => $stmt->error));
            }
        } else {
            echo json_encode(array("message" => "File upload failed."));
        }
    } else {
        echo json_encode(array("message" => "Missing required fields in the POST request."));
    }
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
