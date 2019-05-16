<?php
	// session_start();
	header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    header('Access-Control-Allow-Credentials: true');

    require_once("db.php");
	$posts_arr = array();

	// check method
	if ( $_SERVER["REQUEST_METHOD"] == "POST") {
		
		$json = file_get_contents('php://input'); 
		$obj = json_decode($json);
		$email = $obj->email;
		$password = $obj->password;
		$name = $obj->username;
		$image = $obj->image;

		$sql5 = "SELECT max(id) from users";
		
		$sql3 = "SELECT u.id, u.email, u.password, u.admin, ud.name, ud.problem, ud.image FROM users u INNER JOIN user_details ud on ud.id_user=u.id where u.id=(select max(id) from users)";
		$sql2 = "INSERT INTO users (email,password,admin) VALUES ('$email','$password','u')";
		$sql1 = "SELECT * FROM users WHERE email = '$email'";
		$result1 = $conn->query($sql1);
		$row1 = $result1->fetch_row();
		if ( !is_null($row1)){
			$post_item = array(
				"response" => "Error:used email");
			array_push($posts_arr, $post_item);
		} else {

			if ($conn->query($sql2) === TRUE){
				$result5 = $conn->query($sql5);
				$row5 = $result5->fetch_row();
				$id = $row5[0];
				$sql4 = "INSERT INTO user_details (id_user, name, problem, image) VALUES ($id , '$name', ' ', '$image')";
				
				$result4 = $conn->query($sql4);
				$result3 = $conn->query($sql3);
				if ( $result3 ){
					while ($row3 = $result3->fetch_row()) {
					      $post_item = array(
					      	'response' => "OK",
					        'id' => $row3[0],
					        'email' => $row3[1],
					        'password' => $row3[2],
					        'type' => $row3[3],
					        'name' => $row3[4],
					        'problem' => $row3[5],
					    	'image' => $row3[6]);
					      array_push($posts_arr, $post_item);
					  }
				}
			} else {
				$post_item = array(
					"response" => "Error:used emailwerty");
				array_push($posts_arr, $post_item);
			}
		}
		///////////////////////////////////

		// 	$result2 = $conn->query($sql2);
		// 	if ( $result2 ){
		// 		$row2 = $result2->fetch_row();
		// 		if ( !is_null($row2)){
		// 			$post_item = array(
		// 				"response" => "OK",
		// 				"row" => $row2);
		// 			array_push($posts_arr, $post_item);
		// 		}
		// 	} 
		// }
	}


    echo json_encode($posts_arr);
  
  	$conn->close();
?>
