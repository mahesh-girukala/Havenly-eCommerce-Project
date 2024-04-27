import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Styles/global.css'; // Import Global CSS

import Navbar from './Components/Layout/Header';
//import WomensProducts from './Pages/Womens';
import WomenListData from './Pages/Womens'
function App() {
  return (
    <div className="App">
        <Navbar />
        <WomenListData />
    </div>
  );
}

export default App;
