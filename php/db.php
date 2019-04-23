<?php
    $hostname = "127.0.0.1";
    $username = "root";
    $password = "root";
    $database = "daw";
    $conn = new mysqli($hostname, $username, $password, $database);
    if ($conn->connect_errno) {
        echo "Failed to connect to MySQL: (" . $conn->connect_errno . ") " . $conn->connect_error;
    }

    
?>