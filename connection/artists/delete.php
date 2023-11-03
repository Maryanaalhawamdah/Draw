<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");



if (isset($_GET['id'])) {
   
    $id = $_GET['id'];

    $sql = 'DELETE FROM artists
    WHERE id = :id';

$statement = $conn->prepare($sql);
$statement->bindParam(':id', $id, PDO::PARAM_INT);


if ($statement->execute()) {
echo 'id ' . $id . ' was deleted successfully.';
}

}
?>


