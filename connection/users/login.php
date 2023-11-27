<!-- <?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");




// Continue with your regular script logic below
require_once '../conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $email = $data->email;
    $password = $data->password;

    $stmt = $pdo->prepare("SELECT * FROM Users WHERE Email = ?");
    $stmt->execute([$email]);

    $user = $stmt->fetch();
    if ($user && password_verify($password, $user['Password'])) {
        echo json_encode(['success' => true, 'message' => 'Login successful', 'UserId'=>$user['UserId']]);


    } else {
        // Passwords do not match, login failed
        echo json_encode(['success' => false, 'message' => 'Login failed. Please check your credentials.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?> -->

<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-type: application/json");

require_once '../conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $email = $data->email;
    $password = $data->password;
    $response=array();
    $sql="SELECT * FROM `users` WHERE `email`='$email'";
    $result=$conn->query($sql);
    if($result->num_rows > 0){
        $row=$result->fetch_assoc();

        if (password_verify($password, $row['password'])) {
            session_start();
            $_SESSION['id']=$row['id'];
            $_SESSION['fname']=$row['fname'];
            echo json_encode(['success' => true, 'message' => 'Login successful', 'id'=>$row['id']]);
        }else{
            echo json_encode(['success' => false, 'message' => 'Login failed. Please check your credentials.']);
        }
    }else{
        echo json_encode(['success' => false, 'message' => 'Invalid request method']);

    }
    // echo json_encode($response);
}
?>

