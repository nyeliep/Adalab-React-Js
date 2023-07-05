import logo from './logo.svg';
import './App.css';
import Introduction from './Introduction';
import Navigation from './Introduction/nav';
import Homepage from './Introduction/home';



function App() {
  return (
    <div>
      <Navigation/>
      <Homepage/>
     <Introduction/>
    </div>
  );
}

export default App;
