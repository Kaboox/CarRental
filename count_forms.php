<?php
$conn = new mysqli('localhost', 'root', '', 'projekttest');
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} else {
    $result = $conn->query("SELECT COUNT(*) AS total FROM formularz");
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $totalForms = $row['total'];
        echo "$totalForms";
    } else {
        echo "Brak";
    }
    $conn->close();
}
?>