let turn = true;
let boardCells = Array.from(document.getElementsByClassName("cell"));
let board = document.getElementById("board");
let winStatus = false;

boardCells.forEach(function(cell){
  cell.addEventListener("click",cellClick)
});


function cellClick(event){
  if(winStatus==true) return;
  let currCell = event.target;
  if(turn == true)
  {
    currCell.classList.add("x");
  }
  else
  {
    currCell.classList.add("circle");
  }
  gameStatus();
  turn = !turn;
  setNextPlayerHint();

}

function setNextPlayerHint()
{
  board.classList.remove("x");
  board.classList.remove("circle");
  
  if(turn)
  {
    board.classList.add("x");
  }
  else
  {
    board.classList.add("circle");
  }
}

function gameStatus()
{
  let r11 = boardCells[0].classList[1];
  let r12 = boardCells[1].classList[1];
  let r13 = boardCells[2].classList[1];
  let r21 = boardCells[3].classList[1];
  let r22 = boardCells[4].classList[1];
  let r23 = boardCells[5].classList[1];
  let r31 = boardCells[6].classList[1];
  let r32 = boardCells[7].classList[1];
  let r33 = boardCells[8].classList[1];

  let counter = 0;

  if(r11 && r11 === r12 && r11 === r13){
    announcewinner();
    
  }
  else if(r21 && r21 === r22 && r21 === r23){
    announcewinner();
  ;
  }
  else if(r31 && r31 === r32 && r13 === r33){
    announcewinner();
    
  }
  else if(r11 && r11 === r21 && r11 === r31){
    announcewinner();
    
  }
  else if(r12 && r12 === r22 && r12 === r32){
    announcewinner();
    
  }
  else if(r13 && r13 === r23 && r13 === r33){
    announcewinner();
    
  }
  
  else if(r11 && r11 === r22 && r11 === r33){
    announcewinner();
    
  }
  else if(r13 && r13 === r22 && r13 === r31){
    announcewinner();

  }
  else 
  {
    draw();
  }
 
  function announcewinner(){
    if(turn)
    {
      document.getElementById("winning-message").innerHTML = "X Wins ";
      winStatus = true;
    }
    else
    {
      document.getElementById("winning-message").innerHTML = "0 Wins ";
      winStatus = true;
    }
  }
  
  function draw()
  {
    for(let element of boardCells)
    { 
      if(element.classList[1]=="x"||element.classList[1]=="circle")
      {
        continue;
      }
      else
      {
        return;
      }
    }
    document.getElementById("winning-message").innerHTML = "its a Draw";
    winStatus = true;

  }

}
