import React from 'react'

export default function Contactcard(props) {
    const{id,name,email}=props.eachcontact;
  return (
    <div>
         <div id={id} className="container d-flex align-items-center justify-content-between shadow-sm p-3 mb-2 bg-body-tertiary rounded">
        <div className="feilds">
            <h4>{name}</h4>
            <h6>{email}</h6>
        </div>
        <i class="fa-solid fa-trash h-50"></i>
    </div>
    </div>
  )
}
