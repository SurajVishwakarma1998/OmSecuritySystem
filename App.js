
import './App.css';
import HeroSec from './component/heroSection/herosec';
import Navbar from './component/heroSection/navbar';
import About from "./component/about/about";
import Services from "./component/servicesfolder/Services"

function App() {
  return (
    <div className="App">
     <Navbar />
     <HeroSec />
     <About />
     <Services />
    </div>
  );
}

export default App;
