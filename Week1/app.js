const express = require("express");
const app = express();
const port=3000;

// declaration of function with params

const addTwoNumbers=(num1, num2)=>{
    return num1 + num2;
}

// function to parse data to add function

app.get("/addTwoNumbers", (req,res)=>{
    const num1=parseInt(req.query.num1);
    const num2=parseInt(req.query.num2);
    const result = addTwoNumbers(num1,num2);
    res.json({statuscode:200, data:result});
});

// prints result to console

console.log("The result is: ",addTwoNumbers(1,2));

app.listen(port,()=>{ 
    console.log(`The server is running on url: http://localhost:${port}/addTwoNumbers `);
})