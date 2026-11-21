function letExample(){

    let y = 1;
    console.log("Printing let Variable ", y); // output : 1

    if(true){
        let y = 24; // diffent variable , Blocked scope
        console.log("Inside Blocked Scope ", y); // output : 24
    }

    console.log("Outside Blocked Scope ", y); // output : 1
}

letExample();