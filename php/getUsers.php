<?php

  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  include_once 'database.php';
  include_once 'mycontroller.php';

  $database = new Database();
  $db = $database->connect();
  $post = new Controler($db);
  $result = $post->getUsers();
  $num = $result->rowCount();
  echo result;
  if($num > 0) {
      // Post array
      $posts_arr = array();
      // $posts_arr['data'] = array();
      while($row = $result->fetch(PDO::FETCH_ASSOC)) {
          extract($row);
          $post_item = array(
              'id' => $user_id,
              'email' => $user_email,
              'password' => $user_password,
              'type' => $user_type,
              
          );
          // Push to "data"
          array_push($posts_arr, $post_item);
          // array_push($posts_arr['data'], $post_item);
      }
      // Turn to JSON & output
      echo json_encode($posts_arr);
  } else {
      // No Posts
      echo json_encode(
          array('message' => 'No Posts Found')
      );
  }