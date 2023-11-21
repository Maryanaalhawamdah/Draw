<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");

// Check if the HTTP method is DELETE
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Check if the 'id' parameter is provided in the request
    if (isset($_GET['id'])) {
        // Sanitize and validate the 'id' parameter
        $id = filter_var($_GET['id'], FILTER_VALIDATE_INT);

        if ($id !== false && $id !== null) {
            // Prepare the SQL statement to delete a record based on the provided 'id'
            $sql = 'DELETE FROM users WHERE id = :id';

            // Prepare and bind the parameters
            $statement = $conn->prepare($sql);
            $statement->bindParam(':id', $id, PDO::PARAM_INT);

            // Execute the statement
            if ($statement->execute()) {
                echo json_encode(array("message" => "Record with id $id was deleted successfully."));
            } else {
                // Handle database error
                echo json_encode(array("error" => "Error deleting record.", "details" => $statement->errorInfo()));
            }
        } else {
            // Handle invalid 'id' parameter
            echo json_encode(array("error" => "Invalid id parameter."));
        }
    } else {
        // Handle missing 'id' parameter
        echo json_encode(array("error" => "Missing id parameter."));
    }
} else {
    // Handle invalid HTTP method
    echo json_encode(array("error" => "Invalid request method. Only DELETE method is allowed."));
}
?>
