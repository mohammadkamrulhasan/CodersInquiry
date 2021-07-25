import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Footer></Footer>
    </Router>
  );
}

export default App;
