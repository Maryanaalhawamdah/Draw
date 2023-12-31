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
        isset($customer['fname']) &&
        isset($customer['lname']) &&
        isset($customer['email']) &&
        isset($customer['phone'])&&
        isset($customer['city']) &&
        isset($customer['address'])
        
    ) {
        $fname = $customer['fname'];
        $lname = $customer['lname'];        
        $email = $customer['email'];
        $phone = $customer['phone'];
        $city = $customer['city'];
        $address = $customer['address'];

        $sql = "UPDATE users SET fname = '$fname',lname ='$lname' , email = '$email',phone = '$phone',city='$city', address = '$address'  WHERE id = $id";

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
