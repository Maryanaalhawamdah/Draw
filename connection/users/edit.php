<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");

if (isset($_GET['id'])) {
    $id = $_GET['id'];
} else {
    echo 'Invalid request: Missing users ID.';
    return;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents("php://input");
    $customer = json_decode($data, true);

    if (
        isset($customer['clientName']) &&
        isset($customer['email']) &&
        isset($customer['phone'])&&
        isset($customer['address']) &&
        isset($customer['image'])
        
    ) {
        $clientName = $customer['clientName'];       
        $email = $customer['email'];
        $phone = $customer['phone'];
        $address = $customer['address'];
        $image = $customer['image'];

        $sql = "UPDATE users SET clientName = '$clientName',  email = '$email',phone = '$phone', address = '$address',image='$image'  WHERE id = $id";

        try {
            $conn->exec($sql);
            echo json_encode(array("message" => "Customer information updated successfully."));
        } catch (PDOException $e) {
            echo json_encode(array("message" => "Error updating customer information: " . $e->getMessage()));
        }
    } else {
        echo json_encode(array("message" => "Missing required fields in the JSON data."));
    }
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
