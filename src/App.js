import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useState } from 'react';
import './App.css';

//import components
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

//import screens
import HomeScreen from './screens/HomeScreen';
import Work from './screens/Work'
import Skills from './screens/Skills'
import Projects from './screens/Projects'
import Research from './screens/Research'
import SolarTracker from './screens/SolarTracker';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/workexperience" component={Work}  />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/research" component={Research} />
          <Route exact path="/solartracker" component={SolarTracker} />
        </Switch>
      </main>

      <Footer />

    </Router>
  );
}

export default App;
