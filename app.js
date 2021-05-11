
const express = require("express");
const app = express();
const port = 3000;


const fs = require("fs");
const axios = require("axios");
const { response } = require("express");

const readFile = () => {
    let content 
    fs.readFile("data.txt", (err, data) => {
        if (err) throw err;
        content = data.toString();
        console.log(content);
    });
  };

//readFile()


const writeFile = () => {
    fs.writeFile("text.txt", "A new file has been created", (err) => {
        if (err) throw err;
        console.log("The file has been saved");
      });
  };

  //writeFile()

  const getPost = (id) => {axios
   
    .get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
    .then((response)=>{

        console.log(response.data)
        return response.data
    })

  };
  //getPost(1);
  //getPost(50);


app.listen(port, () => {
   
    console.log(` http://localhost:${port}`);
  });