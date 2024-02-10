function shout(string){
    return string.toUpperCase()
}

function whisper(string){
    return string.toLowerCase()
}

function logShout(String){
    return console.log(String.toUpperCase())
}

function logWhisper(String){
    return console.log(String.toLowerCase())
}

function sayHiToHeadphonedRoommate(String){
    let newString
    if (String === String.toLowerCase()){
        newString = 'I can\'t hear you!'
    } else if(String === String.toUpperCase()){
        newString = "YES INDEED!"
    }else if(String === "Let\'s have dinner together!"){
        newString = "I would love to!"
    }
    
    return newString
}