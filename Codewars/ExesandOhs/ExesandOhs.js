function XO(str) {
    let numX=0;
    let numO=0;
    for(let i=0; i < str.length; i++){
        if(str.charAt(i)=='x'|| str.charAt(i)=='X'){
        numX ++;
    }if(str.charAt(i)=='o'|| str.charAt(i)=='O'){
        numO++;
    }
    }if(numO===numX){
        return true;
    }if(numX!==numO){
        return false;
    }
};