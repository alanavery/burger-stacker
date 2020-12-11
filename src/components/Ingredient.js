function Ingredient(props) {
  return (
    <div>
      <li className="ingredient-text">{props.ingredient.name}</li>
      <button onClick={() => props.addLayer(props.ingredient)}>+</button>
    </div>
  );
}

export default Ingredient;
