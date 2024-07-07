<?php
session_start();

// ユーザーがログインしているか確認
if (isset($_SESSION['user_id'])) {
    $response = [
        'loggedIn' => true,
        'username' => $_SESSION['username'],
        'userId' => $_SESSION['user_id']
    ];
} else {
    $response = ['loggedIn' => false];
}

header('Content-Type: application/json');
echo json_encode($response);
?>
