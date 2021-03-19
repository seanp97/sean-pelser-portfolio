import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Portfolio from './components/Portfolio';        
import PortfolioShow from './components/PortfolioShow';        
import About from './components/About';        
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/about" exact component={About} />
          <Route path="/portfolio/:id" component={PortfolioShow} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
