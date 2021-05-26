const fs = require("fs");
const person = {
	nom: "Merdie",
	color: "black",
};

const read = fs.readFileSync("./person.json",'utf8');
console.log(read);
 const obj = JSON.parse(read)
 obj.PortFolio.push(person)
 const json= JSON.stringify(obj)
 
 fs.writeFileSync('./person.json',json,"utf8" )