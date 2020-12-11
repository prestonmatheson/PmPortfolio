import './App.scss';
import './css_reset.scss';
import './general.scss';
import './home.scss';
import './utilities.scss';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import WorkHistory from './WorkHistory';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/work_history" component={WorkHistory} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
