import './App.css';
import loginScreen from './screens/loginScreen';
import photosScreen from './screens/photosScreen';
import postsScreen from './screens/postsScreen';
import NavBar from './components/layout/navBar';
import {BrowserRouter as Router, Route} from 'react-router-dom'

/**
 * Screen render React Router
 */
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/login" component={loginScreen} />
        <Route path="/posts" component={postsScreen} />
        <Route path="/photos" component={photosScreen} />
      </div>
    </Router>
  );
}

export default App;
