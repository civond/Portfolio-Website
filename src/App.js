import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrolltoTop from './components/scrolltoTop';

// CSS Files
import './pages/css/styling.css';
import './pages/css/fade.css';
import './pages/css/banners.css';

// Pages
import home from './pages/home';
import grad from './pages/grad';
import projects from './pages/projects';
import abroad from './pages/abroad';
import photos from './pages/photos';

function App() {
  return (
    <Router>

      <ScrolltoTop />
      <Navbar />
      
      <Switch>
        <Route path='/' exact component={home} />
        <Route path='/home' component={home} />
        <Route path='/projects' component={projects} />
        <Route path='/grad' component={grad} />
        <Route path='/photos' component={photos} />
        <Route path='/abroad' component={abroad} />
      </Switch>

    </Router>
  );
}

export default App;
