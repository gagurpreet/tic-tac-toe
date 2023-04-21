		
	
var board = document.querySelector('.board');
var clicks = 0
board.addEventListener('click', function(event){
	console.log(event.target)
	var clickedBox= event.target
for(var i=0 ; i<=9; i++){
	clicks[i]
		if(clickedBox!=='' && clicks%2===0){
		clicks= clicks+1;	
		clickedBox.textContent = "X";
			console.log(clicks)
		}else{
			clickedBox.textContent="O"
			clicks= clicks+1;
		}
}
 //var vertical = document.querySelector('')

 //console.log(vertical.id)


})
	
		