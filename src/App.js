import React from 'react';
import './App.css';
import Nav from "./Components/Nav"
import Carousel from "./Components/Carousel"
import Jumbotron from "./Components/Jumbotron"
import Welcome from './Welcome';
import TwoComponent from './Components/TwoComponent';
import Team from "./Components/Team"
import Contact from './Components/Contact';
import Footer from './Components/Footer';

 const preload = document.getElementById("preloader");
      window.addEventListener("load", () => {
         preload.style.opacity = "0";
         preload.style.zIndex = "-1";
      })

class App extends React.Component {
   
  render() { 
    return ( 
      <div className="App">
      <Nav></Nav>
      <Carousel></Carousel>
      <Jumbotron></Jumbotron>
      <Welcome></Welcome>
      <TwoComponent 
          key="1"
          id="about"
          title="About Us"
          text1= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto at fugiat, soluta aliquid saepe."
          text2="Lorem iusto at fugiat, soluta aliquid saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto at fugiat, soluta aliquid saepe."
          text3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto at fugiat, soluta aliquid saepe."
          btnText="Learn more"
          img="desk.png"
      />
      <Team></Team>
      <TwoComponent 
          key="2"
          id="services"
          title="Our Services"
          text1= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto at fugiat, soluta aliquid saepe."
          text2="Lorem  iusto at fugiat, soluta aliquid saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto at fugiat, soluta aliquid saepe."
          text3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto at fugiat, soluta aliquid saepe."
          btnText="Learn more"
          img="bootstrap2.png"
      />
      <Contact></Contact>
      <Footer></Footer>
    </div>
     );
  }
}
 
export default App;

