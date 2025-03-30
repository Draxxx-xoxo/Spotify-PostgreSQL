<?php
header("Content-Type: application/json");
require "config.php"; // Include database connection

$query = "SELECT * FROM songs WHERE 1=1";
$params = [];

// Check if search parameters exist
if (!empty($_GET['track_name'])) {
    $query .= " AND track_name ILIKE ?";
    $params[] = "%" . $_GET['track_name'] . "%";
}

if (!empty($_GET['artist_name'])) {
    $query .= " AND artist_name ILIKE ?";
    $params[] = "%" . $_GET['artist_name'] . "%";
}

if (!empty($_GET['album_name'])) {
    $query .= " AND album_name ILIKE ?";
    $params[] = "%" . $_GET['album_name'] . "%";
}

if (!empty($_GET['conn_country'])) {
    $query .= " AND conn_country = ?";
    $params[] = $_GET['conn_country'];
}

if (!empty($_GET['platform'])) {
    $query .= " AND platform = ?";
    $params[] = $_GET['platform'];
}

if (!empty($_GET['timestamp'])) {
    $query .= " AND timestamp = ?";
    $params[] = $_GET['timestamp'];
}

$stmt = $pdo->prepare($query);
$stmt->execute($params);
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return JSON response
echo json_encode($data);
?>