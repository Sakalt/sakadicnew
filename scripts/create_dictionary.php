<?php
require_once 'db_connect.php';

// リクエストボディを取得
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['userId']) && isset($data['dictionaryName'])) {
    $userId = $data['userId'];
    $dictionaryName = $data['dictionaryName'];

    // 新しい辞書を作成するクエリ
    $sql = "INSERT INTO dictionaries (user_id, name) VALUES ($userId, '$dictionaryName')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => $conn->error]);
    }
} else {
    echo json_encode(['success' => false, 'error' => '無効なリクエスト']);
}

$conn->close();
?>
