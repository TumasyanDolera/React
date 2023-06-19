import React from "react";
import { Component } from "react";

class UserProfileCard extends Component{
  constructor(props){
    super(props)
    this.state ={
      Name: "David",
      Email: "David@mail.com",
      Avatar: "https://as2.ftcdn.net/v2/jpg/02/23/50/73/1000_F_223507324_jKl7xbsaEdUjGr42WzQeSazKRighVDU4.jpg",
  }
  }
  render(){
    return(
      <div className="Profile">
           <h1>Name: {this.props.Name}</h1>
           <h2>Email:{this.props.Email}</h2>
           <img src={this.props.Avatar}/>
      </div>
    );
  }
}

export default UserProfileCard;