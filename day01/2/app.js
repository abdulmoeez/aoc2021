var fs = require("fs");
var text = fs.readFileSync("../input.txt").toString();
var input = text.split("\n")
var input_new = []
var total = 0

for(var i = 0;i < input.length; i++){
    const entry = input[i];
    var sum = 0
    if(input[i+1] && input[i+2]){
        sum = parseInt(entry) + parseInt(input[i+1]) + parseInt(input[i+2]) 
        input_new.push(sum)
    }
}

for(var i = 0;i < input_new.length; i++){
    const entry = parseInt(input_new[i])
    if(input_new[i+1]){
        if(parseInt(input_new[i+1]) > entry){
            total+=1;
        }
    }
}


console.log(total)