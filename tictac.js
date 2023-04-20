var select1 = document.querySelector('#div1');
		  select1.addEventListener('click', function(){
		   select1.className ='red-background'
		//    console.log(select1.className )
		   //select1.style.backgroundColor = 'red';
		})

		var select2 = document.querySelector('#div2');
		select2.addEventListener('click', function(){
		   // select2.style.backgroundColor = 'red';
		   select2.className ='red-background'
		})

		var select3 = document.querySelector('#div3');
		select3.addEventListener('click', function(){
	   //   select3.style.backgroundColor = 'red';
		   select3.className ='red-background'
		})
		
		 var boxes = document.querySelector('.boxes');
		 boxes.addEventListener('click', function(event){
			console.log(event.target.className)
			//console.log(select1)
			if (event.target.className='red-background'){
				boxes.className ='green-background'
			}
		 })