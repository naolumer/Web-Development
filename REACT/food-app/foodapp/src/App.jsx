import { useState } from 'react'
import Search from "./components/Search.jsx"
import FoodList from './components/FoodList.jsx';
import Nav from './components/Nav.jsx';
import "./App.css";
import Container from './components/Container.jsx';
import InnerContainer from './components/InnerContainer.jsx';
import FoodDetail from './components/FoodDetail.jsx';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");


  return (
    <div className="App">
      <Nav />
      <Search foodData = {foodData} setFoodData = {setFoodData} />
      
      <Container>
        <InnerContainer>
            <FoodList setFoodId ={setFoodId} foodData = {foodData} />
        </InnerContainer>

        <InnerContainer>
            <FoodDetail foodId={foodId}/>
        </InnerContainer>
        
      </Container>
    </div>
  )
}

export default App
