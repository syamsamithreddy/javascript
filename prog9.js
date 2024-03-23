// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response=>response.json())
//   .then(data=>console.log(data))
const baseURL="https://jsonplaceholder.typicode.com/posts";
fetch(baseURL)
  .then(response=>response.json())
  .then(data=>{
     data.map((element)=>console.log(element.id + "-" +element.title));
    })
