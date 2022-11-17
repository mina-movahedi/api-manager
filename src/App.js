
import './App.css';
import AsyncAutoComplete from './components/AsyncAutoComplete';
import Tags from './components/Tags';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AsyncAutoComplete />
        <Tags />
      </header>
    </div>
  );
}

export default App;
