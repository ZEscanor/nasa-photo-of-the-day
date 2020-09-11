import React,{useState, useEffect} from "react";
import axios from 'axios';
import Header from "./header/header"
import Imagine from "./img/img";
import "./App.css";

function App() {
 const apikey= "fjjM3sXGD8UaQifQJjx5txS8QMv0yGCkZFRvcoMe";
  const [user, setUser] = useState();
  const [error,setError] = useState("");
const [date,setDate] = useState("2019-08-08")
//console.log(axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`));


 useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${date}`)
      .then(res => setUser(res.data))
      .catch(err => setError(err));
  },[]);
console.log("user",user);

//  useEffect(()=>{
//    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${date}`)
//     .then(response=>response.json())
//     .then(user=>{
//       console.log("fetch",user);
//       setUser(user);
//       //setImage(user.hdurl);
//     })
//  },[])

console.log("user",user);


 if(!user){
   return <p>Loading.. </p>
 }
 else{
  return (
  
    
    
    <div className="App">
      
     {/* <div className="header">
     <p>{user.title}, {user.date}</p>
    </div> */}
    <Header user = {user} />
    <Imagine user = {user} />

      <p>
         {user.explanation}
      </p>

    </div>
  );
}
}
export default App;
