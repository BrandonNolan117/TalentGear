import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateJob from './components/CreateJob';
import AllJobs from './components/AllJobs';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <CreateJob />
        <AllJobs />

      </header>
    </div>
  );
}

export default App;
