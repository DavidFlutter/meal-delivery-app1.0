import './App.css';
import Header from './Header';
import MealTile from './MealTile';
import mealData from './mealData';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <div className="meals">
          {mealData.map(meal=> (
            <MealTile key={Math.random() * 1000000} meal={meal}></MealTile>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default App;
