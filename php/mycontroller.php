<?php
session_start();
class Controler {
    // DB stuff
    private $conn;
    private $tableUser = 'user';
    private $tableDoctor = 'doctor';
    private $tableUnits = 'medical_units';
    public $user_id; public $user_email; public $user_pass; public $user_type;

    // Constructor with DB
    public function __construct($db) {
        $this->conn = $db;
    }
    // Get users
    public function getUsers() {
        // Create query
        $query = "SELECT * FROM user";
        // Prepare statement
        $connection = $this->conn;
        $stmt = $connection->prepare($query);
        $stmt->execute();
        return $stmt;
    }