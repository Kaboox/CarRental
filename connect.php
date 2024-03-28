<?php

    $contactName = $_POST['contactName'];
    $contactEmail = $_POST['contactEmail'];
    $contactMsg = $_POST['contactMsg'];

    


    $conn = new mysqli('localhost', 'root', '', 'projekttest');
    if($conn->connect_error) {
        die('Connection failed: '.$conn->connect_error);
    }else {
        $stmt = $conn->prepare("insert into formularz(contactName, contactEmail, contactMsg) values(?, ?, ?)");
        $stmt->bind_param("sss", $contactName, $contactEmail, $contactMsg);
        $stmt->execute();
        echo "Form sent!";
        $stmt->close();

        $conn->close();
    }
?>