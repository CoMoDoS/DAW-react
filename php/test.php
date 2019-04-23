<?php
	session_start();
	header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

    header('Access-Control-Allow-Credentials: true');
  	require_once("db.php");
	// print_r($_POST);
	$username = $password = "";
	$username_err = $password_err = "";
	$posts_arr = array();

	if ( $_SERVER["REQUEST_METHOD"] == "POST") {
			
			$json = file_get_contents('php://input'); 
			$obj = json_decode($json);
			
			if (  is_null($obj->username)) {
				$username_err = "Please insert username";
			} else {
				$username = $obj->username;
			}

			if (is_null($obj->password)) {
				$password_err = "Please enter password";
			} else {
				$password = $obj->password;
			}

			$sql = "SELECT * FROM user WHERE email = '$username'";
			$result = $conn->query($sql);
			

			if ( $result ){
				$row = $result->fetch_row();

				if(isset($_SESSION["loggedin"]) && $_SESSION["email"] === $row[1]){
		    		$post_item = array(
					"response" => "loggedin");
					array_push($posts_arr, $post_item);
					    
				}else { 
		
					if ( $row[2] === $password ){
						session_start();

						$_SESSION["loggedin"] = true;
						$_SESSION["id"] = $row[0];
						$_SESSION["email"] = $row[1];

						$post_item = array(
						"response" => "OK");
						array_push($posts_arr, $post_item);
					}else{
						$post_item = array(
						"response" => "ERRORR password",
						"data" => $row,
						"pass" => $password,
						"email" => $username);
						array_push($posts_arr, $post_item);
						// header($_SERVER["SERVER_PROTOCOL"]." 406 Not Found"); 
						// exit;
					}
				}				

		} else {
			// header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found"); 
			// exit;
			$post_item = array(
				"response" => "Errorr");
			array_push($posts_arr, $post_item);
			
		}
	}
	echo json_encode($posts_arr);
  
  	$conn->close();

			// if ( $result ){
			// 	$row = $result->fetch_row();
			// 	$post_item = array(
			// 		"response" => "OK",
			// 		"id" => $row[0] ,
			// 		"email" => $row[1],
			// 		"password" => $row[2],
			// 		"type" => $row[3]);
			// 	array_push($posts_arr, $post_item);
			// }else{
			// 	echo "response errorr";
			// }
  	// // print_r($obj);
			// $post_item = array(
			// 	"a" => $obj->username,
			// 	"b" => $obj);
			// array_push($posts_arr, $post_item);


?>

