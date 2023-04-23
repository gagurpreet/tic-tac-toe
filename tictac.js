	
var boxes = document.querySelectorAll('#boxes');
var winMsg = document.querySelector('#winMsg');
var refreshBtn = document.querySelector('#refreshBtn')
var winConditions= [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];
var options= ['','','','','','','','',''];
var firstPlayer= 'X';

var running = 0;
var clicks = 0
function startGame(){
	var boxes= boxes.addEventListener('click', cellClicked)
		refreshBtn.addEventListener('click', restartGame);
		winMsg.textContent = firstPlayer + "'s turn"
		running = 1;
}

function cellClicked(){
	var boxIndex = div.value(boxIndex);
	if(options[boxIndex]!= ''|| !running){
		return;
	}
	updatebox(box,boxIndex);
}

function updatebox(box, index){
	options[index]= firstPlayer;
	box.textContent= firstPlayer;
}

function changePlayer(){
     if(firstPlayer== 'X'){
		firstPlayer== 'O'
		winMsg.textContent= firstPlayer
	 }
}
function checkWinner(){
	for(var i=0; i<winConditions.length; i++){
		var condition = winConditions[i];
		var boxe1 = options[condition[0]];
		var boxe2 = options[condition[1]];
		var boxe3 = options[condition[2]];
		if(boxe1 == '' || boxe2 =='' || boxe3==''){
			return;
		}
		if(boxe1== boxe2 && boxe3 == boxe3){
			winMsg.textContent= boxe1.value + " wins!"
			return;
		}
		else if((options!=='')){
			winMsg.textContent = " Match Draw!";
			return;
		}
		else{ 
			changePlayer();
		}
	}
}
function restartGame(){
	 firstPlayer = 'X';
	 options = ['','','','','','','','',''];
	 winMsg.textContent= firstPlayer

}
// board.addEventListener('click', function(event){
// 	var clickedBox= event.target

// 	if(clickedBox!=='' && clicks%2===0){
// 		clicks= clicks+1;	
// 			clickedBox.textContent = "X";
// 			if(box1.textContent ==="X" && box2.textContent==="X" && box3.textContent==="X"){
// 				console.log(" X player Won!!!")
// 			}else if(box4.textContent ==="X" && box5.textContent==="X" && box6.textContent==="X"){
// 				console.log(" X player Won!!!")
// 			}else if(box7.textContent ==="X" && box8.textContent==="X" && box9.textContent==="X"){
// 				console.log(" X player Won!!!")
// 			}else if(box1.textContent ==="X" && box4.textContent==="X" && box7.textContent==="X"){
// 				console.log(" X player Won!!!")
// 			}else if(box2.textContent ==="X" && box5.textContent==="X" && box8.textContent==="X"){
// 				console.log(" X player Won!!!")
// 			}else if(box3.textContent ==="X" && box6.textContent==="X" && box9.textContent==="X"){
// 				console.log(" X player Won!!!")
// 			}else if(box1.textContent ==="X" && box5.textContent==="X" && box9.textContent==="X"){
// 				console.log(" X player Won!!!")
// 			}else if(box3.textContent ==="X" && box5.textContent==="X" && box7.textContent==="X"){
// 				console.log(" X player Won!!!")
// 			}
// 	}else if(clickedBox=='' && clicks%2===0){
// 			console.log("Match is draw!!")
// 	}else{
// 			clickedBox.textContent="O"
// 				if(box1.textContent ==="O" && box2.textContent==="O" && box3.textContent==="O"){
// 					console.log(" O player Won!!!")
// 				}else if(box4.textContent ==="O" && box5.textContent==="O" && box6.textContent==="O"){
// 					console.log(" O player Won!!!")
// 				}else if(box7.textContent ==="O" && box8.textContent==="O" && box9.textContent==="O"){
// 					console.log(" O player Won!!!")
// 				}else if(box1.textContent ==="O" && box4.textContent==="O" && box7.textContent==="O"){
// 					console.log(" O player Won!!!")
// 				}else if(box2.textContent ==="O" && box5.textContent==="O" && box8.textContent==="O"){
// 					console.log(" O player Won!!!")
// 				}else if(box3.textContent ==="O" && box6.textContent==="O" && box9.textContent==="O"){
// 					console.log(" O player Won!!!")
// 				}else if(box1.textContent ==="O" && box5.textContent==="O" && box9.textContent==="O"){
// 					console.log(" O player Won!!!")
// 				}else if(box3.textContent ==="O" && box5.textContent==="O" && box7.textContent==="O"){
// 					console.log(" O player Won!!!")
// 				}
// 	}
	
// 			clicks= clicks+1;

// })
 //var vertical = document.querySelector('')

 //console.log(vertical.id)



	
		