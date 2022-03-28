// Code your solution here
function findMatching(arr, name){
   return arr.filter(element => element.toUpperCase() == name.toUpperCase() )
}

function fuzzyMatch(arr, name){
    return arr.filter(element => element[0].toUpperCase() == name[0].toUpperCase() )
}


function matchName(driverArr, str){
    return driverArr.filter(element => element.name == str )
}