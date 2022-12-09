import logo from './logo.svg';
import './App.css';
import BagelGourmet from './pages/BagelGourmet'
import BagelGourmetWrit from './pages/BagelGourmetWrit'
import Development from './pages/Development'
import Personas from './pages/Personas'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import StyleTransfer from "./pages/StyleTransfer";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="bagel" element={<BagelGourmetWrit/>}/>
            <Route path="development" element={<Development />} />
            <Route path="personas" element={<Personas />} />
            <Route path="style_transfer" element={<StyleTransfer />} />
        </Routes>
      </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
