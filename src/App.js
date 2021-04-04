import data from './components/fishFarm'
import './App.css';
import Write from './components/component'

function App() {
  return (
    <div className="App">
      <Write list={data}/>
    </div>
  );
}

export default App;
