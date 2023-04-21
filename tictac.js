
		
var board = ['', '', '', '', '', '', '' ,'', ''];
function clickRecord(index){
	if(board[index]!==''){
	return;
	}else{
	board[index]= "X"
	}
	}
				
var click = document.querySelector('.board');
		click.addEventListener('click', function(event){
			console.log(event.target.className)
			click.style.background ='red'
			click.textContent = "X";
		 })
		