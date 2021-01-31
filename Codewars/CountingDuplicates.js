function duplicateCount(text){
    let newtext= text.toString().toLowerCase();
    let array=[];
    let doubles=[];
    let count=0;
    for (let i=0; i<newtext.length; i++){
    if(array.includes(newtext.charAt(i)) && !doubles.includes(newtext.charAt(i))){
        count++;
        doubles.push(newtext.charAt(i));
        console.log(count);
    }else{
        array.push(newtext.charAt(i));
        console.log(array);
    }
    }
    return count;
};