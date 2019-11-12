<?php
include 'conn.php';
header("Access-Control-Allow-Origin: *");

$sql = $conn->query("SELECT * FROM product");
$result = array();

while ($data = $sql->fetch_assoc()){
    $result[]=$data;
}

echo json_encode($result);

mysqli_close($conn);
?>