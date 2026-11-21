function varExample(){

    var x  = 1 ;
     if(true){
        var x = 2;
        console.log("Inside if Block" , x);
     }
     
     console.log("Outside if Block" , x);
}

varExample();