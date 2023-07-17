const fs=require("fs");
const quote ="hello  ";

for(let i=1; i<10; i++)
{
fs.writeFile(`./backup/text-${i}.html`,quote,(err) =>{
    console.log("completed writting");
});
}