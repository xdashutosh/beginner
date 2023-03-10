import React from 'react'
import Contactcard from './Contactcard';
export default function Contactlist(props) {

const rendercontactlist=props.contactsprop.map((eachcontact)=>{
return (
 <Contactcard  eachcontact={eachcontact}/>
)
});

  return (
    <div> 
   <hr />
   <h3 className="m-4">Contact List</h3>
   <div className="container ">
   {rendercontactlist}
   </div>
    </div>
  )
}
