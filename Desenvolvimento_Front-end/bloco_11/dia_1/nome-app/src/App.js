import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = [
  'estudar React',
  'jogar dota',
  'treinar'
]

function App() {
  return (
    <div className="App">
      { array.map((task) => Task(task)) }
    </div>
  );
}

export default App;
