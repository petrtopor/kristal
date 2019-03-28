<?php 
	require_once 'db.php'; 
	 
	$link = mysqli_connect($host, $user, $password, $database) 
		or die("Ошибка " . mysqli_error($link));
	 $link->set_charset("utf8");
	 
	if($_POST['value']=='m'){
		$q1 = 'мужской';
	}
	if($_POST['value']=='w'){
		$q1 = 'женский';
	}
	
	$query ="INSERT INTO `users` (`q1`) VALUES ( '".$q1."');";
	$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
		 
	echo mysqli_insert_id($link);
	// закрываем подключение
	mysqli_close($link);