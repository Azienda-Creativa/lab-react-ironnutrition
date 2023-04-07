import FoodBox from './FoodBox';
import { Row } from 'antd';

export default function FoodList({ food }) {
  return (
    <Row className="row">
      {food.map((food) => {
        return <FoodBox key={food.name} food={food} />;
      })}
    </Row>
  );
}
