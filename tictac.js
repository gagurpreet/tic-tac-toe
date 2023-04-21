		
	
var board = document.querySelector('.board');
var clicks = 0
board.addEventListener('click', function(event){
	console.log(event.target.textContent)
	var clickedBox= event.target
	if(clickedBox!==''){
		clicks= clicks+1;
		if(clicks!==2){
		clickedBox.textContent = "X";
		}else{
			clickedBox.textContent = "O";
		}
	}
	
})
	// click.style.background ='red'
	// 
		
		