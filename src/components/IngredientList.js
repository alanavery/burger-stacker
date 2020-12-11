import Ingredient from './Ingredient';
import { useState } from 'react';

function IngredientList(props) {
  const [ingredientList] = useState([
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' }
  ]);

  const ingredient = ingredientList.map((ingredient, index) => {
    return <Ingredient ingredient={ingredient} key={index} addLayer={props.addLayer} />;
  });

  return (
    <div>
      <h1>Ingredient List</h1>
      <ul>{ingredient}</ul>
    </div>
  );
}

export default IngredientList;
