<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

require_once("../conn.php");

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data from the request body
    $data = file_get_contents("php://input");

    // Decode the JSON data
    $user = json_decode($data, true);

    // Extract user data
    $FirstName = filter_var($user['FirstName'], FILTER_SANITIZE_STRING);
    $LastName = filter_var($user['LastName'], FILTER_SANITIZE_STRING);
    $Email = filter_var($user['Email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($user['phone'], FILTER_SANITIZE_STRING);
    $ShippingAddress = filter_var($user['ShippingAddress'], FILTER_SANITIZE_STRING);
    $Password = password_hash($user['Password'], PASSWORD_DEFAULT);
    $UserId = filter_var($user['UserId'], FILTER_SANITIZE_NUMBER_INT);

    // Check if all necessary data is provided before attempting to update
    if ($FirstName && $LastName && $Email && $phone && $ShippingAddress && $Password && $UserId) {
        // Assuming you have a 'users' table in your database
        $sql = "UPDATE users SET 
                FirstName = :FirstName,
                LastName = :LastName,
                Email = :Email,
                phone = :phone,
                ShippingAddress = :ShippingAddress,
                Password = :Password
                WHERE UserId = :UserId"; // You should have a unique identifier for the user, like UserID

        try {
            // Use a try-catch block for better error handling
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':FirstName', $FirstName);
            $stmt->bindParam(':LastName', $LastName);
            $stmt->bindParam(':Email', $Email);
            $stmt->bindParam(':phone', $phone);
            $stmt->bindParam(':ShippingAddress', $ShippingAddress);
            $stmt->bindParam(':Password', $Password);
            $stmt->bindParam(':UserId', $UserId);

            if ($stmt->execute()) {
                echo json_encode(array("message" => "User updated successfully."));
            } else {
                echo json_encode(array("message" => "Unable to update user."));
            }
        } catch (PDOException $e) {
            // Log the error
            error_log("Error updating user: " . $e->getMessage());

            // Return an error response
            echo json_encode(array("message" => "Unable to update user."));
        }
    } else {
        echo json_encode(array("message" => "Missing or invalid user data."));
    }
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
