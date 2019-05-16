<?php
	// Initialize the session
	
	session_start();
	header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    header('Access-Control-Allow-Credentials: true');

	// echo implode(" ",$_SESSION);
	// print_r($_SESSION);
	// Unset all of the session variables
	$_SESSION = array();
	 
	// Destroy the session.
	session_destroy();
	 
	// Redirect to login page
	
	exit;
?>