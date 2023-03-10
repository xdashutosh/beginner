import './App.css';
import Header from './Header';
import Addcontact from './Addcontact';
import Contactlist from './Contactlist';
import React, { useState } from 'react';

function App() {
 const [contacts,setcontact]=useState([]);
 const addcontactHandler=(contact)=>{
  setcontact([...contacts,contact] );
 }
  return (
    <>
     <Header/>
     <Addcontact addcontactHandler={addcontactHandler}/>
  <Contactlist contactsprop={contacts}/> 
  {/* props-accessing data from parent to child */}


  </>
  );
}

export default App;
