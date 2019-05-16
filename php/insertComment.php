<?php
	require "db.php";
	header('Access-Control-Allow-Origin: http://localhost:3000');
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	header('Access-Control-Max-Age: 1000');
	header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
	header('Access-Control-Allow-Credentials: true');

	$posts_arr = array();

	if ( $_SERVER["REQUEST_METHOD"] == "POST") {
			
		$json = file_get_contents('php://input'); 
		$obj = json_decode($json);

		$doc_id = $obj->doc_id;
		$content = $obj->content;
		$rating = $obj->rating;
		$user_id = $obj->user_id;
		$sql = "INSERT INTO comments (doctor_id, content, rating, user_id) VALUES ($doc_id, '$content', $rating, $user_id)";
		$sql2 = "SELECT rating, nr_comms FROM doctors WHERE id = $doc_id";
		// $post_item = array(
		// 		"response" => $sql);
		// 		array_push($posts_arr, $post_item);
		$res = $conn->query($sql2);
		$row = $res->fetch_row();
		$nr_comms = $row[1] + 1;
		$new_rating = $row[0] + $rating;

		$sql3 = "UPDATE doctors SET rating=$new_rating, nr_comms=$nr_comms WHERE id = $doc_id";
		$res3 = $conn->query($sql3);
		$result = $conn->query($sql);
		if ( $result ){
			$post_item = array(
				"response" => "OK");
				array_push($posts_arr, $post_item);
		}else{
			$post_item = array(
				"response" => "ERRROR");
				array_push($posts_arr, $post_item);
		}

	}
	echo json_encode($posts_arr);

	$conn->close();
