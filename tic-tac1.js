var board = document.querySelector('.board');
var boxes = document.querySelector('#boxes')
var winMsg = document.querySelector('#winMsg')
var turn= 0
var whoesTurn = 'X'
var gameStatus = true

board.addEventListener('click', function(event){
	var clickedBox= event.target

	console.log( clickedBox)

	if(clickedBox !=='' && turn%2==0 && turn !== 8 && whoesTurn==='X' && gameStatus !==false){
			
		clickedBox.textContent = "X";
		if(box1.textContent ==="X" && box2.textContent==="X" && box3.textContent==="X"){
			console.log(" X player Won!!!")
			winMsg.textContent= " X player Won!!!"
			gameStatus =false
		}else if(box4.textContent ==="X" && box5.textContent==="X" && box6.textContent==="X"){
			winMsg.textContent= " X player Won!!!"
			gameStatus =false
		}else if(box7.textContent ==="X" && box8.textContent==="X" && box9.textContent==="X"){
			winMsg.textContent= " X player Won!!!"
			gameStatus =false
		}else if(box1.textContent ==="X" && box4.textContent==="X" && box7.textContent==="X"){
			winMsg.textContent= " X player Won!!!"
			gameStatus =false
		}else if(box2.textContent ==="X" && box5.textContent==="X" && box8.textContent==="X"){
			winMsg.textContent= " X player Won!!!"
			gameStatus =false
		}else if(box3.textContent ==="X" && box6.textContent==="X" && box9.textContent==="X"){
			winMsg.textContent= " X player Won!!!"
			gameStatus =false
		}else if(box1.textContent ==="X" && box5.textContent==="X" && box9.textContent==="X"){
			winMsg.textContent= " X player Won!!!"
			gameStatus =false
		}else if(box3.textContent ==="X" && box5.textContent==="X" && box7.textContent==="X"){
			winMsg.textContent= " X player Won!!!"
			gameStatus =false
		}
		turn= turn+1;
		return 

	}else if(clickedBox!=='' && turn%2!== 0 && turn!== 8 && whoesTurn=== 'X'  && gameStatus !==false){
		
		clickedBox.textContent="O"
		if(box1.textContent ==="O" && box2.textContent==="O" && box3.textContent==="O"){
			winMsg.textContent= " O player Won!!!"
			gameStatus =false

		}else if(box4.textContent ==="O" && box5.textContent==="O" && box6.textContent==="O"){
			winMsg.textContent= " O player Won!!!"
			gameStatus =false
		}else if(box7.textContent ==="O" && box8.textContent==="O" && box9.textContent==="O"){
			winMsg.textContent= " O player Won!!!"
			gameStatus =false
		}else if(box1.textContent ==="O" && box4.textContent==="O" && box7.textContent==="O"){
			winMsg.textContent= " O player Won!!!"
			gameStatus =false
		}else if(box2.textContent ==="O" && box5.textContent==="O" && box8.textContent==="O"){
			winMsg.textContent= " O player Won!!!"
			gameStatus =false
		}else if(box3.textContent ==="O" && box6.textContent==="O" && box9.textContent==="O"){
			winMsg.textContent= " O player Won!!!"
			gameStatus =false
		}else if(box1.textContent ==="O" && box5.textContent==="O" && box9.textContent==="O"){
			winMsg.textContent= " O player Won!!!"
			gameStatus =false
		}else if(box3.textContent ==="O" && box5.textContent==="O" && box7.textContent==="O"){
			winMsg.textContent= " O player Won!!!"
			gameStatus =false
		}
		turn = turn +1;
		
	}else if(gameStatus ==true) {
		((box1.textContent ==="O" || box1.textContent ==="X") && (box2.textContent ==="O" || box2.textContent==="X" ) && (box3.textContent ==="O" || box3.textContent==="X") && (box4.textContent ==="O" || box4.textContent ==="X") && (box5.textContent ==="O" || box5.textContent ==="X") && (box6.textContent ==="O" || box6.textContent ==="X") && (box7.textContent ==="O" || box7.textContent ==="X") && (box8.textContent ==="O" || box8.textContent ==="X") && (box9.textContent ==="O" || box9.textContent ==="X"))
		{
		winMsg.textContent= " Match is draw!! "
		
		}	
	}		

})