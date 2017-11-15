 const board = [
    ['x', 'o', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
  
  const rand = function(n) {
      
     return Math.floor((Math.random() * n) + 1);
      
    };
  
  const nextMove = function(board,isX) {
    
 	let a = rand(3)-1; 
	let b = rand(3)-1;
    

	while(board[a][b]!==' ')
      
	{  a = rand(3)-1;
	   b = rand(3)-1;} 
    
	return [a,b];};
   
    console.log(nextMove(board, true)); 