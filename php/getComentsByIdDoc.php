<?php
	require "db.php";
	header('Access-Control-Allow-Origin: http://localhost:3000');
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	header('Access-Control-Max-Age: 1000');
	header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
	header('Access-Control-Allow-Credentials: true');

	$posts_arr = array();

  	if ( $_SERVER["REQUEST_METHOD"] == "GET") {
			
		if (isset($_GET['id'])) {
			$id = $_GET['id'];

			$sql  = "SELECT rating,content FROM `comment` WHERE doctor_id=$id";
			$result = $conn->query($sql);
			
			if ( $result ) {
				while ($row = $result->fetch_row()) {
						
			      $post_item = array(
			        'rating' => $row[0],
			        'content' => $row[1]
			        );
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


			