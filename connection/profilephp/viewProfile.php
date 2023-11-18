<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding');
header('Content-type: application/json');

require("../conn.php");

// Check if "id" is set in the request
if (isset($_REQUEST['id'])) {
    $id = $_REQUEST['id'];

    try {
        // Use a prepared statement to prevent SQL injection
        $stmt = $pdo->prepare("SELECT * FROM Users WHERE `UserId` = :id");
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();

        $user = array();

        // Fetch the data from the prepared statement
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $user[] = $row;
        }

        echo json_encode($user);
    } catch (PDOException $e) {
        // Handle database errors
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['error' => 'Missing "id" parameter']);
}

// Close the database connection
$pdo = null;
?>
