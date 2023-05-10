function countSquares(cuts){
    if(cuts === 0)
      return 1;
  
    return (6 * cuts * cuts) + 2;
  }