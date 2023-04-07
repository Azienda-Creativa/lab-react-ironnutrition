import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

// CREATE NEW FOOD
function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');
  const [createdFood, setCreatedFood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    setCreatedFood(props.addFood(newFood));
    setName(''); // Clear the form fields
    setImage('');
    setCalories('');
    setServings('');
    console.log(newFood);
  };

  console.log(name, image, calories, servings);
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image</label>
      <Input
        name="image"
        value={image}
        type="text"
        onChange={(e) => setImage(e.target.value)}
      />

      <label>Calories</label>
      <Input
        name="calories"
        value={calories}
        type="text"
        onChange={(e) => setCalories(e.target.value)}
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={servings}
        type="text"
        onChange={(e) => setServings(e.target.value)}
      />

      <Button
        className="btn"
        type="submit"
        style={{ backgroundColor: '#1677ff', color: '#fff' }}
      >
        Create
      </Button>
    </form>
  );
}

export default AddFoodForm;
