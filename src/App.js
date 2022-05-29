import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path={"/todo/:id"} >
          <Todo/>
        </Route>

      </Switch>
      <h5 className='text-center mt-5 p-3' style={{background:"#1111"}}  >Thistine.</h5>
    </div>
  );
}

export default App;
