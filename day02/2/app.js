var fs = require("fs");
var text = fs.readFileSync("../input.txt").toString();
var input = text.split("\n")
var forward = 0
var depth = 0
var aim = 0


for(var i = 0;i < input.length; i++){
    const entry = input[i].split(" ")
    const pos = entry[0]
    const pos_val = parseInt(entry[1])
    if(pos === "forward"){
        forward += pos_val
        depth += aim * pos_val
    }else if(pos === "up"){
        aim -= pos_val
    }else if(pos === "down"){
        aim += pos_val
    }
}

const answer = forward * depth
console.log(answer)
