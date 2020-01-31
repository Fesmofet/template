import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../styles/index.less";

class Layout extends Component {
  
 
  render() { 
    
    return (
     <div className="wraper">
       <header className="header"></header>
       <main className="content-wrapper">
         <div className="sidebar"></div>
         <div className="content"></div>
       </main>
        <footer className="footer"></footer>
        
     </div>
  
    )
}
}


export default hot(module)(Layout);