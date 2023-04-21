		
	
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
			if(box1.textContent ==="X" && box2.textContent==="X" && box3.textContent==="X"){
				console.log(" X player Won!!!")
			}else if(box4.textContent ==="X" && box5.textContent==="X" && box6.textContent==="X"){
				console.log(" X player Won!!!")
			}else if(box7.textContent ==="X" && box8.textContent==="X" && box9.textContent==="X"){
				console.log(" X player Won!!!")
			}else if(box1.textContent ==="X" && box4.textContent==="X" && box7.textContent==="X"){
				console.log(" X player Won!!!")
			}else if(box2.textContent ==="X" && box5.textContent==="X" && box8.textContent==="X"){
				console.log(" X player Won!!!")
			}else if(box3.textContent ==="X" && box6.textContent==="X" && box9.textContent==="X"){0.
				console.log(" X player Won!!!")
			}else if(box1.textContent ==="X" && box5.textContent==="X" && box9.textContent==="X"){
				console.log(" X player Won!!!")
			}else if(box3.textContent ==="X" && box5.textContent==="X" && box7.textContent==="X"){
				console.log(" X player Won!!!")
			}
		}else{
			clickedBox.textContent="O"
			if(box1.textContent ==="O" && box2.textContent==="O" && box3.textContent==="O"){
				console.log(" O player Won!!!")
			}else if(box4.textContent ==="O" && box5.textContent==="O" && box6.textContent==="O"){
				console.log(" O player Won!!!")
			}else if(box7.textContent ==="O" && box8.textContent==="O" && box9.textContent==="O"){
				console.log(" O player Won!!!")
			}else if(box1.textContent ==="O" && box4.textContent==="O" && box7.textContent==="O"){
				console.log(" O player Won!!!")
			}else if(box2.textContent ==="O" && box5.textContent==="O" && box8.textContent==="O"){
				console.log(" O player Won!!!")
			}else if(box3.textContent ==="O" && box6.textContent==="O" && box9.textContent==="O"){
				console.log(" O player Won!!!")
			}else if(box1.textContent ==="O" && box5.textContent==="O" && box9.textContent==="O"){
				console.log(" O player Won!!!")
			}else if(box3.textContent ==="O" && box5.textContent==="O" && box7.textContent==="O"){
				console.log(" O player Won!!!")
			}
			clicks= clicks+1;
		}
}
 //var vertical = document.querySelector('')

 //console.log(vertical.id)


})
	
		