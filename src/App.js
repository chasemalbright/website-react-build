import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

//import components
import Navbar from './components/Navbar';
import Footer from './components/Footer'

//import screens
import HomeScreen from './screens/HomeScreen';
import Work from './screens/Work'

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/workexperience" component={Work}  />
        </Switch>
      </main>

      <Footer />

    </Router>
  );
}

export default App;
