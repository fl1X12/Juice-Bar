import Navbar from './navbar';
import Home from './home';
import Menu from "./menu";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Menu/>
      <div className='content'>
        <Home/>
      </div>
      
    </div>
  );
}

export default App;