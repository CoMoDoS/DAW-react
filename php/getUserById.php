<?php
	session_start();
	header('Access-Control-Allow-Origin: http://localhost:3000');
  header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
  header('Access-Control-Max-Age: 1000');
  header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
  header('Access-Control-Allow-Credentials: true');
	require_once("db.php");

	$posts_arr = array();

	if ( $_SERVER["REQUEST_METHOD"] == "GET") {
		$id = $_SESSION["id"];	

		if ($id > 0) {
			// $id = $_SESSION["id"];

		   
			$sql  = "SELECT u.id, u.email, u.password, u.admin, ud.name, ud.problem, ud.image FROM users u INNER JOIN user_details ud on ud.id_user=u.id where u.id=$id";
							
			$result = $conn->query($sql);
			
			if ( $result ) {
				while ($row = $result->fetch_row()) {
				      $post_item = array(
				      	'response' => "OK",
				        'id' => $row[0],
				        'email' => $row[1],
				        'password' => $row[2],
				        'type' => $row[3],
				        'name' => $row[4],
				        'problem' => $row[5],
				    	'image' => $row[6]);
				      array_push($posts_arr, $post_item);
				  }
			}else{
			  $post_item = array(
			  	'response' => "Error query");
			  array_push($posts_arr, $post_item);
			}
		} else {
			$post_item = array(
			  	'response' => "Bad param");
			  array_push($posts_arr, $post_item);
		    
	}
} else {
	$post_item = array(
  		'response' => "Bad reuestq");
 	array_push($posts_arr, $post_item);
}

echo json_encode($posts_arr);

$result->close();

$conn->close();

?>


			