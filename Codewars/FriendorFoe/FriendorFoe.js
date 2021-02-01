function friend(friends){
    let myfriends=[];
    for(let i=0; i<friends.length; i++){
      if(friends[i].length==4){
        myfriends.push(friends[i]);
      }
    }
    return myfriends;
  };