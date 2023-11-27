
<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

require_once '../conn.php';

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    // Use object notation to access properties of the $data object
    $fname = $data->fname;
    $lname = $data->lname;
    $email = $data->email;
    $password = password_hash($data->password, PASSWORD_DEFAULT);
    $phone = $data->phone;
    $city = $data->city;
    $address = $data->address;
    $isAdmin = 0; // Set isAdmin to 0 for regular users
    

    $response=array();
    $query="SELECT * FROM `users` WHERE `email`='$email'";
    $result=$conn->query($query);
    if($result->num_rows == 0){
    // Prepare and execute the SQL query to insert the user data into the database
        $sql="INSERT INTO `users`(`fname`, `lname`, `email`, `password`, `phone`, `city`, `address`, `isAdmin`) VALUES ('$fname','$lname','$email','$password','$phone','$city','$address',0)";
    
        if($conn->query($sql)===true){
            $response['message']="Data stored successfully";
        }else{
            $response['message']="Error: ".$sql."<br".$conn->error;
        }
        echo json_encode($response);
    }else{
        $response['message']="Email Not Valid";
        echo json_encode($response);
    }
}
$conn->close();
?>