
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const fs = require("fs");
const axios = require("axios");
const { json } = require("express");

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

  const getPostAsync = async (data) => {
    
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${data}/`)
        console.log(response.data)
        return response.data
    }
    catch (err){
        throw err
    }
  };


  ///practice 

  const appendToFile = (data) => {
    fs.appendFile(
      "data.txt",
      `
  ${data}`,
      (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      }
    );
  };
  
  const copyFile = (fileName) => {
    function callback(err) {
      if (err) throw err;
      console.log("source.txt was copied to destination.txt");
    }
  
    fs.copyFile(fileName, "copy_of_data.txt", callback);
  };
  copyFile("text.txt");
  
  
  const newPost = JSON.stringify({
    title: "JavaScript Basics",
    body: "This post contains information about javaScript ",
    userId: 1,
  });
  const createPost = (post) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  //createPost(newPost)
  
  
  const newPost2 = JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated body",
    userId: 1,
  });
  
  const updatePost = (id, data) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  //updatePost(1, newPost2);
  
  
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      
      return response.data;
    } catch (err) {
      throw err;
    }
  };
  //getUsers();
  
  
  const saveUsers = async () => {
      try {
      
      const allUsers = await(getUsers()) 
       fs.writeFile("users.txt",JSON.stringify(allUsers), (err) => {
          if (err) throw err;
          console.log("The file has been saved");
        });
      } catch (err) {
          throw err;
        }
  }
  
      saveUsers()
  

app.listen(port, () => {
   
    console.log(` http://localhost:${port}`);
  });