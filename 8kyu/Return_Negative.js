// Return Negative

function makeNegative(num) {
    if(num === 0) {
        return 0
    }
    else if ( num > 0) {
        return num * -1;
    }
    else {
        return num;
    }
  }

  // Reverse the list

  function reverseList(list) {
    return list.reverse();
  }
  
  reverseList([1,2,3,4])