<?php
// Handle user registration and image upload
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $dob = $_POST['dob'];
    $phone=$_POST['phone'];
    $address=$_POST['address'];
    $image=$_POST['image'];
    

    // Handle image upload and store its path

    // Store user data in the database
}
?>