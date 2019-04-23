<?php
	
	require "db.php";

  header('Access-Control-Allow-Origin: http://localhost:3000');
  header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
  header('Access-Control-Max-Age: 1000');
  header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
  header('Access-Control-Allow-Credentials: true');


	$sql = "SELECT * FROM doctor";


  $posts_arr = array();
  $result = $conn->query($sql);
  if ( $result ) {
   while ($row = $result->fetch_row()) {
          $post_item = array(
            'id' => $row[0],
            'name' => $row[1],
            'year' => $row[2],
            'type' => $row[3],
            'image' => $row[4]);
          array_push($posts_arr, $post_item);
      }
  }else{
      echo "result null";
  }
  echo json_encode($posts_arr);
  
  $result->close();
  
  $conn->close();
?>