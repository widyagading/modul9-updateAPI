<?php
    include 'conn.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

    $_POST = json_decode(file_get_contents("php://input"), true);

    $product_id = $_POST['product_id'];
    $product_name = $_POST['product_name'];
    $product_price = $_POST['product_price'];

    $sql = $conn->query("UPDATE product SET product_id='$product_id', product_name='$product_name', product_price='$product_price' WHERE product_id=$product_id");

    if($sql == TRUE){
        $result = "berhasil";
    }
    else{
        $result="Eror:" . $sql . "<br/>" . $conn->error;
    }

    echo json_encode($result);

    mysqli_close($conn);
?>