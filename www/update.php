<?php 
	require_once 'db.php'; 
	 
	$link = mysqli_connect($host, $user, $password, $database) 
		or die("Ошибка " . mysqli_error($link));
	 $link->set_charset("utf8");
	 
	 $val = '';
	if($_POST['sex']=='m'){
		if($_POST['name']=='q2'){
			if($_POST['value']==1) $val='до 18';
			if($_POST['value']==2) $val='18-25';
			if($_POST['value']==3) $val='26-30';
			if($_POST['value']==4) $val='31-40';
			if($_POST['value']==5) $val='41-50';
			if($_POST['value']==6) $val='50+';
		}
		
		if($_POST['name']=='q3'){
			if($_POST['value']==1) $val='Романтическая комедия с трогательной историей любви.';
			if($_POST['value']==2) $val='Захватывающий экшен, где ты всегда помогаешь любимой в передрягах. ';
			if($_POST['value']==3) $val='Драма, но в которой всё закончится хэппи-эндом.';
			if($_POST['value']==4) $val='Триллер с напряженным сюжетом, но с отважной красоткой в главной роли.';
			if($_POST['value']==5) $val='Я сам режиссер своей жизни. ';
		}
		
		if($_POST['name']=='q5'){
			if($_POST['value']==1) $val='Утонченное серебряное колье с жемчугом.';
			if($_POST['value']==2) $val='Элегантные серьги-пусеты с топазом.';
			if($_POST['value']==3) $val='Классическое золотое кольцо с бриллиантом круглой огранки.';
			if($_POST['value']==4) $val='То, что подарил ей именно я';
		}
		
		if($_POST['name']=='q8'){
			if($_POST['value']==1) $val='Умение заряжать позитивом и рассмешить в любой ситуации.';
			if($_POST['value']==2) $val='Быть отважным героем втайне от всех.';
			if($_POST['value']==3) $val='Идти ва-банк и держать все под контролем.';
			if($_POST['value']==4) $val='Находить выход из любой ситуации благодаря уму и сообразительности.';
			if($_POST['value']==5) $val='Превращать каждый ее день в праздник: ювелирные подарки, путешествия, рестораны.';
			if($_POST['value']==6) $val='Внимательность - я всегда замечаю новые сережки и маникюр.';
			if($_POST['value']==7) $val='Щедрость: купить колье с сапфирами без повода? Легко! ';
			if($_POST['value']==8) $val='Нежность и романтика: способность быть рядом и поддержать.';
		}
				
		if($_POST['name']=='q9'){
			if($_POST['value']==1) $val='https://vk.cc/8Zy6ob (кулон)';
			if($_POST['value']==2) $val='https://vk.cc/8Zy6Dc  (обручальное кольцо)';
			if($_POST['value']==3) $val='https://vk.cc/8Zy6Nh  (серьги)';
			if($_POST['value']==4) $val='https://vk.cc/8Zy6Tr (цветочек)';
		}

		
	}
	if($_POST['sex']=='w'){
		
		if($_POST['name']=='q2'){
			if($_POST['value']==1) $val='до 18';
			if($_POST['value']==2) $val='18-25';
			if($_POST['value']==3) $val='26-30';
			if($_POST['value']==4) $val='31-40';
			if($_POST['value']==5) $val='41-50';
			if($_POST['value']==6) $val='50+';
		}
		
		if($_POST['name']=='q3'){
			if($_POST['value']==1) $val='Романтическая комедия с трогательной историей любви.';
			if($_POST['value']==2) $val='Захватывающий экшен, где ты всегда помогаешь любимому в передрягах. ';
			if($_POST['value']==3) $val='Драма, но в которой всё закончится хэппи-эндом.';
			if($_POST['value']==4) $val='Триллер с напряженным сюжетом, но с красавцем-злодеем в главной роли.';
			if($_POST['value']==5) $val='Я сама режиссер своей жизни. ';
		}
		
		if($_POST['name']=='q4'){
			if($_POST['value']==1) $val='Надежным, как аметист.';
			if($_POST['value']==2) $val='Независимым, как горный хрусталь.';
			if($_POST['value']==3) $val='Страстным, как гранат.';
			if($_POST['value']==4) $val='Многогранным, как бриллиант.';
			if($_POST['value']==5) $val='Податливым, как золото.';
		}
		
		if($_POST['name']=='q5'){
			if($_POST['value']==1) $val='Утонченное серебряное колье с жемчугом.';
			if($_POST['value']==2) $val='Элегантные серьги-пусеты с топазом.';
			if($_POST['value']==3) $val='Классическое золотое кольцо с бриллиантом круглой огранки.';
			if($_POST['value']==4) $val='Ничего. Пусть заметит, что у меня нет украшений, и подарит их сам. ';
		}
		
		if($_POST['name']=='q6'){
			if($_POST['value']==1) $val='Украшения – это, то что делает женщину женщиной. (Коко Шанель)';
			if($_POST['value']==2) $val='Ювелирные украшение – то дополнение, которое даёт почувствовать себя особенной.(Кетрин Зета-Джонс)';
			if($_POST['value']==3) $val='Каждая встреча с вами - это алмаз, который я прячу в сокровищницу своей души. (Дюма)';
			if($_POST['value']==4) $val='Немые бриллианты часто действуют на женский ум сильнее всякого красноречия.';
		}
		
		if($_POST['name']=='q7'){
			if($_POST['value']==1) $val='Какая разница, важно, что подарок от чистого сердца. Для многих мужчин поход в ювелирный магазин уже подвиг.';
			if($_POST['value']==2) $val='Останусь довольна подарком, но задумаюсь, куда он потратил оставшиеся деньги.';
			if($_POST['value']==3) $val='Подумаю, что он на мне экономит, и расстроюсь.';
			if($_POST['value']==4) $val='Похвалю за рациональный подход. С таким мужчиной точно не пропадешь. ';
		}
		
		if($_POST['name']=='q8'){
			if($_POST['value']==1) $val='Умение заряжать позитивом и рассмешить в любой ситуации.';
			if($_POST['value']==2) $val='Быть отважным героем втайне от всех.';
			if($_POST['value']==3) $val='Идти ва-банк и держать все под контролем.';
			if($_POST['value']==4) $val='Находить выход из любой ситуации благодаря уму и сообразительности.';
			if($_POST['value']==5) $val='Превращать каждый твой день в праздник: ювелирные подарки, путешествия, рестораны.';
			if($_POST['value']==6) $val='Внимательность - он всегда замечает новые сережки и маникюр.';
			if($_POST['value']==7) $val='Щедрость: купить колье с сапфирами без повода? Легко! ';
			if($_POST['value']==8) $val='Нежность и романтика: способность быть рядом и поддержать.';
		}
		
		if($_POST['name']=='q9'){
			if($_POST['value']==1) $val='https://vk.cc/8Zy6ob (кулон)';
			if($_POST['value']==2) $val='https://vk.cc/8Zy6Dc  (обручальное кольцо)';
			if($_POST['value']==3) $val='https://vk.cc/8Zy6Nh  (серьги)';
			if($_POST['value']==4) $val='https://vk.cc/8Zy6Tr (цветочек)';
		}
	}
	
			
	if($_POST['name']=='q10' || $_POST['name']=='shared'){
		$val = $_POST['value'];
	}
	
	
	$query = "UPDATE `users` SET `".$_POST['name']."`='".$val."' WHERE `id`=".$_POST['id'];

	$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
		 
	echo $query;
	// закрываем подключение
	mysqli_close($link);