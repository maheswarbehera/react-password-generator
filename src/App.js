import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import './App.css';
import PasswordGenerator from './component/PasswordGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PasswordGenerator/>
      </header>
    </div>
  );
}

export default App;
