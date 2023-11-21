<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header('Content-Type: application/json'); // Add this line to set the content type

include_once("../conn.php");

// Check if 'id' is set in the request parameters
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = 'DELETE FROM categories WHERE id = :id';

    $statement = $conn->prepare($sql);
    $statement->bindParam(':id', $id, PDO::PARAM_INT);

    // Execute the statement and check the result
    if ($statement->execute()) {
        echo json_encode(array("message" => "Item with id {$id} was deleted successfully."));
    } else {
        // If the deletion fails, provide an error message
        echo json_encode(array("message" => "Error deleting item with id {$id}."));
    }
} else {
    // If 'id' is not set, provide a message indicating the missing parameter
    echo json_encode(array("message" => "Missing 'id' parameter in the request."));
}
?>
