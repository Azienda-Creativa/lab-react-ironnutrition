import { Card, Col, Button, Row } from 'antd';
import ColumnGroup from 'antd/es/table/ColumnGroup';

// Iteration 2
function FoodBox({ food }) {
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
      <Button type="primary" className="btn">
        {' '}
        Delete{' '}
      </Button>
    </Card>
  );
}

export default FoodBox;
