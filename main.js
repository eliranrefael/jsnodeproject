const fs=require("fs");
const path=require("path");
const { text } = require("stream/consumers");

var test=[];
var test2=[[]];
var reg=new RegExp('layout=[a-z,0-9, !;]*','i');

test=fs.readdirSync("./").filter(file=>{
    return path.extname(file)==".cshtml"}
);

console.log(test);

test.forEach(file=>{
    fs.readFile(("./"+file),(err,data)=>
    {
        var lines=data.toString().split("\n");
        lines.every(line=>{
                if(line&&line.search(reg)>=0){
                    test2.push([file,line.match(reg).input.split("=")[1]]);
                    return false;
                }
                return true;
            })
            console.log(test2);
    }
)})

