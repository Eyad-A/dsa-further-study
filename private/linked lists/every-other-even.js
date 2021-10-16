 
  /**
   * given head of linked list return true if every other number is even
   * [1,2,3,4,5,6]
   * 
   * 
   * 
   * 
   Node.val
   Node.next
   if (% 2 === 0 )
   
   * [3, 4, 3, 10, 5, 7, 8, 9]
     [0, 1, 2, 3,  4, 5, 6, 7]
   */
  const isEveryOtherNodeEven = (head) => {
    let isOddIndex = false;
    while (head !== null) {
      //logic goes here
      if (isOddIndex) {
        if (head.val % 2 !== 0) {
          return false;
        }
      }
  
      head = head.next;
      isOddIndex = !isOddIndex;
    }
  
    return true;
  };
  