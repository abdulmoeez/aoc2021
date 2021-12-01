var fs = require("fs");
var text = fs.readFileSync("../input.txt").toString();
var input = text.split("\n")
var total = 0

for(var i = 0;i < input.length; i++){
    const entry = parseInt(input[i])
    if(input[i+1]){
        if(parseInt(input[i+1]) > entry){
            total+=1;
        }
    }
}


console.log(total)