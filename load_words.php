<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "dictionary_db";

// データベースに接続
$conn = new mysqli($servername, $username, $password, $dbname);

// 接続確認
if ($conn->connect_error) {
    die("データベース接続エラー: " . $conn->connect_error);
}
?>
