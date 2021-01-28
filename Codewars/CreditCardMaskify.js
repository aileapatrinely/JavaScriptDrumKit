function maskify(cc){
    console.log(cc.length)
    if(cc.length>4){
      return cc.slice(0,-4).replace(/./g, '#') + cc.slice(-4);
    }else{
      return cc;
    }
  }
  