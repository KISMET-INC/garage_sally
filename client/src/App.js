import './App.css';
import {Router} from '@reach/router';
import Home from './views/Home';
import Dashboard from './views/Dashboard_K';
import AllSales from './views/AllSales';
import Detail from './views/Detail';
import New from './views/New'
import Registration from './components/Registration';
import Login from './components/Login_K';
import NewPostSale from './views/NewPostSale';
import GarageInfo from './views/GarageInfo';

// TRICKLE DOWN STATE

function App() {

  return (
    <div className="App">
        <Router>
          <Home path="/" />
          <Dashboard path="/dashboard" />
          <New path="/sales/new" />
          <Detail path = "/sales/:sale_id" />
          <AllSales path = "/sales/"/>
          <Registration path="register"/>
          <Login path="login"/>
          <NewPostSale path="new-sale"/>
          <GarageInfo path="garage/info/:id"/>
        </Router>
      </div>
  );
}

export default App;
