<?php
require_once 'db_connect.php'; // データベース接続

// リクエストボディを取得
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['username']) && isset($data['email']) && isset($data['password'])) {
    $username = $data['username'];
    $email = $data['email'];
    $password = password_hash($data['password'], PASSWORD_DEFAULT); // パスワードをハッシュ化

    // ユーザー名またはメールアドレスが既に存在するか確認
    $sqlCheck = "SELECT * FROM users WHERE username = ? OR email = ?";
    $stmtCheck = $conn->prepare($sqlCheck);
    $stmtCheck->bind_param('ss', $username, $email);
    $stmtCheck->execute();
    $resultCheck = $stmtCheck->get_result();

    if ($resultCheck->num_rows > 0) {
        echo json_encode(['success' => false, 'error' => 'ユーザー名またはメールアドレスが既に存在します。']);
    } else {
        // 新規ユーザーを登録
        $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('sss', $username, $email, $password);

        if ($stmt->execute()) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'error' => '登録に失敗しました。']);
        }

        $stmt->close();
    }

    $stmtCheck->close();
} else {
    echo json_encode(['success' => false, 'error' => '無効なリクエストです。']);
}

$conn->close();
?>
