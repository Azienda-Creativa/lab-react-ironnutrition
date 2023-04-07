import { Card, Col, Button, Row } from 'antd';

function FoodBox({ food, onDelete }) {
  const handleDelete = () => {
    onDelete(food.name);
  };
  return (
    <Card
      id="card"
      title={food.name}
      style={{ width: 230, height: 300, margin: 10 }}
    >
      <img src={food.image} height={60} alt="food" />
      <p className="p-card">Calories: {food.calories}</p>
      <p className="p-card">Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.calories * food.servings} </b> kcal
      </p>
      <Button type="primary" className="btn" onClick={handleDelete}>
        Delete
      </Button>
    </Card>
  );
}

export default FoodBox;
