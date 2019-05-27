<?php
	header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    header('Access-Control-Allow-Credentials: true');
  	require_once("db.php");

  	$posts_arr = array();

  	if ( $_SERVER["REQUEST_METHOD"] == "GET") {		   
		$sql = "SELECT unitname, sum(rating), sum(nr_comms) from MedicsPerUnit GROUP by unitname";
						
		$result = $conn->query($sql);
		
		if ( $result ) {
			while ($row = $result->fetch_row()) {
			      $post_item = array(
			        'unitname' => $row[0],
			        'rating' => $row[1],
			        'nr_comms' => $row[2]
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
	  		'response' => "Bad reuestq");
	 	array_push($posts_arr, $post_item);
	}

	echo json_encode($posts_arr);

	$result->close();

	$conn->close();

?>


			