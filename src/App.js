import './App.css';
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';
import { useState } from 'react';

function App() {
  const [currentStack, setCurrentStack] = useState([]);

  const addLayer = (layer) => {
    const newStack = [layer, ...currentStack];
    setCurrentStack(newStack);
  };

  return (
    <div className="div-container">
      <IngredientList addLayer={addLayer} />
      <BurgerPane currentStack={currentStack} />
    </div>
  );
}

export default App;
