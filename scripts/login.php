<?php
require_once 'db_connect.php'; // データベース接続

// リクエストボディを取得
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['email']) && isset($data['password'])) {
    $email = $data['email'];
    $password = $data['password'];

    // メールアドレスでユーザーを検索
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user) {
        if (password_verify($password, $user['password'])) {
            session_start();
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'error' => 'パスワードが間違っています。']);
        }
    } else {
        echo json_encode(['success' => false, 'error' => 'メールアドレスが見つかりません。']);
    }

    $stmt->close();
} else {
    echo json_encode(['success' => false, 'error' => '無効なリクエストです。']);
}

$conn->close();
?>
