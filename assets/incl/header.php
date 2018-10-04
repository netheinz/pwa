<?php
if(!isset($pageTitle)) {
    $pageTitle = "My App";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?php echo $pageTitle ?></title>
    <link rel="manifest" href="/site.webmanifest">
</head>
<body>
<h1><?php echo $pageTitle ?></h1>

<ul>
    <li>
        <a href="index.php">Forside</a>
    </li>
    <li>
        <a href="contact.php">Kontakt os</a>
    </li>
</ul>