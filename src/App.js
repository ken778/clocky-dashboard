import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn';
import Landing from './pages/Dashboard/Landing/Landing';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {auth, db} from './Firebase/FirebaseConfig'
import { useEffect, useState } from 'react';

import { collection, doc, onSnapshot } from "firebase/firestore";

function App() {

  var arr1 = [{name: "lang", value: "English"},{name: "age", value: "18"}];
  var arr2 = [{name : "childs", value: '5'}, {name: "lang", value: "German"}];

  Array.prototype.push.apply(arr1,arr2);

console.log('merged',arr1);  // final merged result will be in arr1




  const [users, setUsers] = useState([])
 
  let tempUser = {}


 


 useEffect(()=>{
  const getUsers = onSnapshot(collection(db,'users'),(data)=>{
    console.log('data',data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    
  })
  
  
   
  
 },[])

 if(users!=undefined){
    tempUser = users[0]
 }
  return (
    <>
       <Router>
       <Routes>
       <Route path='/' element={<SignIn />}>
                    </Route>
       <Route path='/landing' element={<Landing users={users} tempUser={tempUser}/>}>
                    </Route>
       </Routes>
       </Router>
     
    </>
  );
}

export default App;
