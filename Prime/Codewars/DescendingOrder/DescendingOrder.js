function descendingOrder(n){
    if(n>=0){
      return parseInt((n+'').split('').sort().reverse().join(''));
    }
  }