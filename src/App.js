import allFoods from './foods.json';
import { useState } from 'react';
import FoodList from './components/FoodList';
import AddFoodForm from './components/AddFoodForm';
import './App.css';
import { Row, Button } from 'antd';
import SearchBar from './components/SearchBar';
function App(props) {
  // API FOODS
  const [foods, setFood] = useState(allFoods);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  function addFood(newFood) {
    const foodsSorted = [...foods, newFood];
    setFood(foodsSorted);
  }

  function searchFood(query) {
    const filteredFoods = [...foods].filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFood(filteredFoods);
    setSearch(query);
  }

  function deleteFood(name) {
    const filteredFoods = [...foods].filter((food) => food.name !== name);
    setFood(filteredFoods);
  }

  return (
    <div className="App">
      <Row className="row">
        <SearchBar className="row" onSearch={searchFood} />
        <AddFoodForm addFood={addFood} />
        <Button></Button>
      </Row>
      <FoodList food={foods} onDelete={deleteFood} />
    </div>
  );
}

export default App;
