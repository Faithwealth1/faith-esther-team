'use strict'

// faith solutions 
function minimumDistances(a) {
    let distances = []
    for(let i = 0; i < a.length; i++) {
        if(a.indexOf(a[i]) !== a.lastIndexOf(a[i])){
            let minDistance = a.lastIndexOf(a[i]) - a.indexOf(a[i])
            distances.push(minDistance)
        }
    }
    if(distances.length===0){
        return -1
    }
    else{
        distances.sort(function(a,b){
            return a-b
        })
        return distances[0]
    }
}   
//  Esther's soultion
function catAndMouse(x,y,z){
    let catAPosition = Math.abs(z - x);
    let catBPosition = Math.abs(z - y);

    if (catAPosition < catBPosition){
        return "Cat A"
    }
    else if (catBPosition < catAPosition){
        return "Cat B"
    }
    else{
        return "Mouse C"
    }
    
}