import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../styles/index.less";

class Layout extends Component {
  
  state = {
      kuku: true
  };
  
  changeKuku = () =>{
    this.setState(prevState => ({
      kuku: !prevState.kuku
    }))
  }
 
  render() { 
    
    return (
     <div className="wrapper">
       <header className="header"></header>
       <main className="content-wrapper">
         <div className="sidebar"></div>
         <div className="content">
           <button onClick={this.changeKuku}>{`${this.state.kuku}`}</button>
         </div>
       </main>
        <footer className="footer"></footer>
     </div>
    )
  }
}


export default hot(module)(Layout);