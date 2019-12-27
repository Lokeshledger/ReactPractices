import React from "react";
import ReactDOM from "react-dom";
import calorieData from "./data/data.js"
import "./styles.css";
function  RenderItem({name,measure,calories,onClick})
{  
  return(
  <div onClick={()=>onClick(name)}>
  <span>{name}</span>
  <span>{measure}</span>
  <span>{calories}</span>
  </div>
  );
}
function FoodClicked({food})
{
  return (<h2>{food}</h2>);
}

class App extends React.Component{
  state={
    foodClicked:"Nothing"
  }

ClickHandler=(name)=>
{
  this.setState({foodClicked:name})
}
  render()
  {
  return (
    <div className="App">
      {
        calorieData.slice(0,5).map(({name,measure,calories})=>(
          <RenderItem 
          name={name} 
          measure={measure} 
          calories={calories}
          onClick={this.ClickHandler}
          />
        ))
      }
      {
        <FoodClicked food={this.state.foodClicked}/>    
      }
    </div>
  );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
