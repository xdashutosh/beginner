import React, { Component } from 'react'

export default class Addcontact extends Component {

    state= {
        name:"",
        email:""
    };
add=(e)=>{
e.preventDefault();
if(this.state.name==="" || this.state.email==="")
{
    alert("all the feilds are must!");
}
this.props.addcontactHandler(this.state); 
this.setState({name:"",email:""});
}
  render() {
    return (
        <div className="container">

        <form onSubmit={this.add}>
        <div class="mb-3">
          <label htmlfor="Name" className="form-label">Name</label>
          <input type="text" className="form-control"  aria-describedby="emailHelp"  value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
        </div>
        <div class="mb-3">
          <label htmlfor="email" className="form-label" >Email</label>
          <input type="email" className="form-control" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
        </div>
     
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
    )
  }
}
