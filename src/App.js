import './app.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Header />
          <Switch>
            <Route path="/my-portfolio" exact component={Home}/>
            <Route path="/my-portfolio/projects" exact component={Projects}/>
            <Route path="/my-portfolio/contacts" exact component={Contacts}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
