<?php 
session_start();
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, x-xsrf-token');
header('Access-Control-Allow-Credentials: true');
require_once("db.php");
$response = array();
$upload_dir = 'uploads/';
$server_url = 'http://localhost/php';
$id = $_SESSION["id"];
if($_FILES['image'])
{
    $avatar_name = $_FILES["image"]["name"];
    $avatar_tmp_name = $_FILES["image"]["tmp_name"];
    $error = $_FILES["image"]["error"];
    if($error > 0){
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file! 13123"
        );
    }else 
    {
        $random_name = $id."-".$avatar_name;
        $upload_name = $upload_dir.strtolower($random_name);
        $upload_name = preg_replace('/\s+/', '-', $upload_name);
    
        if(move_uploaded_file($avatar_tmp_name , $upload_name)) {
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully",
                "url" => $server_url."/".$upload_name,
              );
        }else
        {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!",
            );
        }
    }

    if ( $_POST)
    {
        
        $email = $_POST['email'];
        $name = $_POST['name'];
        $password = $_POST['password'];
        $problem = $_POST['problem'];
        $url_image = $server_url."/".$upload_name;
     

        $sql1 = "UPDATE user SET email = '$email', password='$password' WHERE id = $id ";
        

        $sql2 = "UPDATE user_details SET name = '$name' , problem = '$problem' , image = '$url_image' WHERE id_user=$id ";

        // $post_item = array(
        //         'response1' => $id,
        //         'response2' => $email,
        //         'response3' => $password,
        //         'response4' => $problem,
        //         'response5' => $url_image,
        //     );
        // array_push($response, $post_item);

        $result1 = $conn->query($sql1);
        $result2 = $conn->query($sql2);

        if ( $result1 && $result2 ){
            $post_item = array(
                'response' => "updated"
            );
            array_push($response, $post_item);
        }else 
        {
            $post_item = array(
                'response' => "not updated"
            );
            array_push($response, $post_item);

        }

    }else {
        $post_item = array(
                'response' => "errorrrr"
            );
        array_push($response, $post_item);

    }
  
}else{
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "No file was sent!",
    );
}

echo json_encode($response);
?>