import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/navbar/Topnavbar"
import Banner from "./components/Banner"
import Carousel from './components/Carousel';
import MassageWork from './components/MassageWork';
import Divider from './components/Divider';
import Services from './components/Services';
import MassageTime from './components/MassageTime';
import PriceRange from './components/PriceRange';
import Vaccancy from './components/Vaccancy';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
<Navbar />
<Banner />

<Carousel />
<MassageWork />
<Divider />
<Services /> 
<Divider />
<MassageTime />
<PriceRange />
<Vaccancy />
<Footer />
    </div>
    
  );
}

export default App;
