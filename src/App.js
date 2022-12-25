import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./style.css"
import data from "./data";

function App(){
    const country = data.map(places => {
        return <MainContent 
          key={places.id}
          {...places}
        />
    })
    
    return(
      <div>
        <Header />
        <div>{country}</div>
      </div>
    )
}

export default App;
