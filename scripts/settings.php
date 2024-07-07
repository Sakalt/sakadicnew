<?php
require_once 'db_connect.php'; // データベース接続

session_start();
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'error' => 'ログインしていません。']);
    exit();
}

$userId = $_SESSION['user_id'];
$dictionaryName = $_POST['dictionaryName'];
$dictionaryDescription = $_POST['dictionaryDescription'];
$fontSelect = $_POST['fontSelect'];

if (isset($dictionaryName) && isset($dictionaryDescription) && isset($fontSelect)) {
    // 設定を保存するクエリ
    $sql = "INSERT INTO dictionaries (user_id, name, description, font) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('isss', $userId, $dictionaryName, $dictionaryDescription, $fontSelect);

    if ($stmt->execute()) {
        // OTM-jsonファイルの処理
        if (isset($_FILES['otmJsonFile']) && $_FILES['otmJsonFile']['error'] === UPLOAD_ERR_OK) {
            $fileTmpPath = $_FILES['otmJsonFile']['tmp_name'];
            $jsonData = file_get_contents($fileTmpPath);
            $dictionaryId = $stmt->insert_id;

            $sql = "INSERT INTO dictionary_data (dictionary_id, json_data) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('is', $dictionaryId, $jsonData);

            if (!$stmt->execute()) {
                echo json_encode(['success' => false, 'error' => 'OTM-jsonデータの保存に失敗しました。']);
                exit();
            }
        }

        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => '設定の保存に失敗しました。']);
    }

    $stmt->close();
} else {
    echo json_encode(['success' => false, 'error' => '無効なリクエストです。']);
}

$conn->close();
?>
