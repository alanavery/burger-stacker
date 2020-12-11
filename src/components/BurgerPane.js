import BurgerStack from './BurgerStack';

function BurgerPane(props) {
  const layer = props.currentStack.map((layer, index) => {
    return <BurgerStack layer={layer} key={index} />;
  });

  return (
    <div className="div-burger-pane">
      <h1>Burger Pane</h1>
      {layer}
    </div>
  );
}

export default BurgerPane;
