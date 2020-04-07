/*
Write a JavaScript program to create a new string adding "New!" in front of a given string. 
If  the given string begins with "New!" already then return the original string.  

*/

let originalString =  " ";

function newString(originalString){
    addnew = originalString.concat("  New ");
    check = addnew.includes("New")
    if (check === true){
        console.log(originalString);
    }else{
        console.log(addnew)
    }

}

newString(" don't you");

// the function in arrow form
let originalString =  " ";

newString = originalString => {
    addnew = originalString.concat("  New ");
    check = addnew.includes("New")
    if (check === true){
        console.log(originalString);
    }else{
        console.log(addnew)
    }

}

newString(" don't you");
