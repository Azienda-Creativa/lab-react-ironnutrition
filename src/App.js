import allFoods from './foods.json';
import { useState } from 'react';
import FoodList from './components/FoodList';
import AddFoodForm from './components/AddFoodForm';
import './App.css';
import { Row } from 'antd';
import SearchBar from './components/SearchBar';

function App(props) {
  // API FOODS
  const [foods, setFood] = useState(allFoods);

  function addFood(newFood) {
    const foodsSorted = [...foods, newFood];
    setFood(foodsSorted);
  }

  return (
    <div className="App">
      <Row>
        <SearchBar className="form" />
      </Row>
      <Row className="row">
        <AddFoodForm addFood={addFood} />
      </Row>
      <FoodList food={foods} />
    </div>
  );
}

export default App;
