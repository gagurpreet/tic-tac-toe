		
	
var board = document.querySelector('.board');
var clicks = 0
board.addEventListener('click', function(event){
	console.log(event.target)
	var clickedBox= event.target
	//for(var i =0 ; i<)
	
	if(clickedBox!==''){
		clicks= clicks+1;
		console.log(clicks)
	}
	clickedBox.textContent = "X";
	if(clicks%=2){
		clickedBox.textContent="O"
	}
})
	
		