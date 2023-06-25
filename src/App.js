import * as React from 'react';
import "./App.css"
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function App() {
   const [post, setPost] =useState([]);


async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPost(data);
  } catch (error) {
    console.error(error);
  }
}

   useEffect(()=>{
      // axios.get("https://jsonplaceholder.typicode.com/posts")
      // .then((response)=>setPost(response.data))
      // .catch((error)=>console.log(error)),
      getUsers()
   },[])

  return (
    <div className='container'>
     <h1>This is post</h1>
    <ul>{post.map(item=>(<li>{item.title}</li>))}</ul>
    </div>
  );

}
