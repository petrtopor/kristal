Share = {
	vkontakte: function(purl, ptitle, pimg, text) {
		$.ajax({
			  type: 'POST',
			  url: 'update.php',
			  data: 'name=shared&value=1&id='+$.cookie('id'),
			  success: function(data){
				  
			  }
			});
			
		url  = 'http://vkontakte.ru/share.php?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + encodeURIComponent(ptitle);
		url += '&description=' + encodeURIComponent(text);
		url += '&image='       + encodeURIComponent(pimg);
		url += '&noparse=true';
		Share.popup(url);
	},
	facebook: function(purl, ptitle, pimg, text) {
		$.ajax({
			  type: 'POST',
			  url: 'update.php',
			  data: 'name=shared&value=1&id='+$.cookie('id'),
			  success: function(data){
				  
			  }
			});
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + encodeURIComponent(ptitle);
		url += '&p[summary]='   + encodeURIComponent(text);
		url += '&p[url]='       + encodeURIComponent(purl);
		url += '&p[images][0]=' + encodeURIComponent(pimg);
		Share.popup(url);
	},
	ok: function(){
		$.ajax({
			  type: 'POST',
			  url: 'update.php',
			  data: 'name=shared&value=1&id='+$.cookie('id'),
			  success: function(data){
				  
			  }
			});
		url = 'https://connect.ok.ru/offer?url=https://kristall-shop.com&title=Выиграй одно из 5 украшенией. Романтик или Хулиган&imageUrl=https://kristall-shop.com/img/share.jpg';
		Share.popup(url);
	},

	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};

$(function(){
	
	$('form').on('submit',function(){
		if($("#check").prop("checked") != true) { 
        alert('Ознакомьтесь с политикой конфиденциальности');
        return false;
		}
    return true;
	});
	
	
	var k=1; //текущий вопрос
	var tree = ''; //пол
	
	var m1=0; 
	var m2=0;
	var m3=0;
	var z1=0;
	var z2=0;
	var z3=0;
	var z4=0;
	var z5=0;
	var z6=0;
	var z7=0;
	var z8=0;
	
	$('.js-example-basic-single').select2({
    width: 'resolve',
	placeholder: "Укажи свой город"
});
	
	$('#q11-1').mask("+7 999 999-99-99");
	
	$('.btn-next').on('click',function(){
		
		el = $(this).parent().find('input:radio:checked');
			
		if(el.length==0 && k!=10){
			alert('Выберите вариант ответа');
			return false;
		}
		
		if(k==1){
			$.cookie('id', null);
			$.ajax({
			  type: 'POST',
			  url: 'create.php',
			  data: 'name=q'+k+'&value='+el.val(),
			  success: function(data){
				console.log('id='+data);
				$.cookie('id', data);
				$('#id').val(data);
			  }
			});

			tree = el.val();
			$('.logo.logo-top').addClass('logo-b');
		}
		
		if(k!=1 && k!=11 && k!=10){
			$.ajax({
			  type: 'POST',
			  url: 'update.php',
			  data: 'name=q'+k+'&value='+el.val()+'&sex='+tree+'&id='+$.cookie('id'),
			  success: function(data){
				  console.log(data);
				  console.log('k='+k);
				  console.log('value='+el.val());
				  console.log('tree='+tree);
				  console.log('id='+$.cookie('id'));
			  }
			});
		}
		
		if(k==2){
			
			$('.logo.logo-top').removeClass('logo-b');
		}
		
		if(k==2 && tree=='w'){
			
			if(el.val()==1){z2++;z5++;}
			if(el.val()==2){z2++;z5++;z3++;z6++;}
			if(el.val()==3){z1++;z2++;z3++;z4++;z6++;z8++;}
			if(el.val()==4){z3++;}
			if(el.val()==5){z7++;}
			if(el.val()==6){z3++;z7++;}
		}
		
		if(k==3 && tree=='w'){
			if(el.val()==1){z1++;z2++;z3++;z4++;z7++;}
			if(el.val()==2){z3++;z5++;z6++;z8++;}
			if(el.val()==3){z2++;z5++;z7++;}
			if(el.val()==4){z3++;z5++;z8++;}
			if(el.val()==5){z2++;z6++;}
		}
		
		if(k==4 && tree=='w'){
			if(el.val()==1){z2++;z3++;}
			if(el.val()==2){z3++;z6++;z8++;}
			if(el.val()==3){z2++;z4++;}
			if(el.val()==4){z1++;z4++;z6++;}
			if(el.val()==5){z4++;z7++;}
		}
		
		if(k==5 && tree=='w'){
			if(el.val()==1){z5++;z8++;}
			if(el.val()==2){z1++;z2++;}
			if(el.val()==3){z4++;z5++;z8++;}
			if(el.val()==4){z3++;z6++;}
		}
		
		if(k==6 && tree=='w'){
			if(el.val()==1){z2++;z8++;}
			if(el.val()==2){z5++;z7++;}
			if(el.val()==3){z4++;z1++;}
			if(el.val()==4){z3++;z6++;}
		}
		
		if(k==7 && tree=='w'){
			if(el.val()==1){z2++;z6++;}
			if(el.val()==2){z2++;z5++;z7++;}
			if(el.val()==3){z1++;}
			if(el.val()==4){z3++;z4++;z8++;}
		}
		
		if(k==8 && tree=='w'){
			if(el.val()==1){z6++;}
			if(el.val()==2){z1++;}
			if(el.val()==3){z3++;}
			if(el.val()==4){z5++;}
			if(el.val()==5){z8++;}
			if(el.val()==6){z2++;}
			if(el.val()==7){z7++;}
			if(el.val()==8){z4++;}
		}
		
		if(k==9 && tree=='w'){
			if(el.val()==1){z1++;z5++;}
			if(el.val()==2){z3++;z7++;}
			if(el.val()==3){z6++;z8++;}
			if(el.val()==4){z2++;z4++;}
		}
		
		if(k==3 && tree=='m'){
			if(el.val()==1){m2++;m3++;}
			if(el.val()==2){m1++;}
			if(el.val()==3){m2++;}
			if(el.val()==4){m3++;}
			if(el.val()==5){m1++;}
		}
		
		if(k==5 && tree=='m'){
			if(el.val()==1){m2++;}
			if(el.val()==2){m3++;}
			if(el.val()==3){m2++;}
			if(el.val()==4){m3++;m1++;}
		}
		
		if(k==8 && tree=='m'){
			if(el.val()==1){m2++;}
			if(el.val()==2){m1++;}
			if(el.val()==3){m2++;}
			if(el.val()==4){m3++;}
			if(el.val()==5){m2++;}
			if(el.val()==6){m1++;}
			if(el.val()==7){m3++;}
			if(el.val()==8){m3++;}
		}
		
		if(k==9 && tree=='m'){
			if(el.val()==1){m1++;}
			if(el.val()==2){m1++;}
			if(el.val()==3){m2++;}
			if(el.val()==4){m3++;}
		}
		
	
		
		k++;
		if(tree=='m' && k==4) k=5;
		if(tree=='m' && k==6) k=8;
		
		$('#q10m-1').keydown(function(e) {
			if(e.keyCode === 13) {
				e.preventDefault();
				
			if(tree=='m')
				var array = [m1,m2,m3];
			if(tree=='w')
				var array = [z1,z2,z3,z4,z5,z6,z7,z8];
			
			var max = getMaxValue(array);
			
			if(tree=='m'){
				max="result-m"+max+".html";
			}
			if(tree=='w'){
				max="result-z"+max+".html";
			}
			
			$('#link').val(max);
			
			function getMaxValue(array){
				var max = array[0]; // берем первый элемент массива
				var index = 0;
				for (var i = 0; i < array.length; i++) { // переберем весь массив
					// если элемент больше, чем в переменной, то присваиваем его значение переменной
					if (max < array[i]) {
						max = array[i]; 
						index = i;
					}
					
				}
				index++;
				// возвращаем максимальное значение
				return index;
			}
			  $(this).parent().parent().hide();
			  $('#bar').hide();
			  $('#q11').show();
			}
		  });
		  
		  $('#q10-1').keydown(function(e) {
			if(e.keyCode === 13) {
				e.preventDefault();
				
			if(tree=='m')
				var array = [m1,m2,m3];
			if(tree=='w')
				var array = [z1,z2,z3,z4,z5,z6,z7,z8];
			
			var max = getMaxValue(array);
			
			if(tree=='m'){
				max="result-m"+max+".html";
			}
			if(tree=='w'){
				max="result-z"+max+".html";
			}
			
			$('#link').val(max);
			
			function getMaxValue(array){
				var max = array[0]; // берем первый элемент массива
				var index = 0;
				for (var i = 0; i < array.length; i++) { // переберем весь массив
					// если элемент больше, чем в переменной, то присваиваем его значение переменной
					if (max < array[i]) {
						max = array[i]; 
						index = i;
					}
					
				}
				index++;
				// возвращаем максимальное значение
				return index;
			}
			  $(this).parent().parent().hide();
				$('#q11').show();$('#bar').hide();
			}
		  });
		  
		if(k==11){
			
			 val = $('[name="q10-'+tree+'"]').val();
			  $.ajax({
			  type: 'POST',
			  url: 'update.php',
			  data: 'name=q10&value='+val+'&sex='+tree+'&id='+$.cookie('id'),
			  success: function(data){
				  console.log(data);
				  console.log('k='+k);
				  console.log('value='+val);
				  console.log('tree='+tree);
				  console.log('id='+$.cookie('id'));
			  }
			});
			
			if(tree=='m')
				var array = [m1,m2,m3];
			if(tree=='w')
				var array = [z1,z2,z3,z4,z5,z6,z7,z8];
			
			var max = getMaxValue(array);
			
			if(tree=='m'){
				max="result-m"+max+".html";
			}
			if(tree=='w'){
				max="result-z"+max+".html";
			}
			
			$('#link').val(max);
			
			function getMaxValue(array){
				var max = array[0]; // берем первый элемент массива
				var index = 0;
				for (var i = 0; i < array.length; i++) { // переберем весь массив
					// если элемент больше, чем в переменной, то присваиваем его значение переменной
					if (max < array[i]) {
						max = array[i]; 
						index = i;
					}
					
				}
				index++;
				// возвращаем максимальное значение
				return index;
			}
			$(this).parent().hide();
			$('#q'+k).show();
			$('#bar').hide();
		} else {
			$(this).parent().hide();
			$('#q'+k+'-'+tree).show();
		}

		$('#bar span').removeClass('active');
		$('#bar span:nth-child('+k+')').addClass('active');
	});

});