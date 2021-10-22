import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import FooterComponent from './shared/Footer/FooterComponent';
import HeaderComponent from './shared/Header/HeaderComponent';
import CreateEmployee from './component/CreateEmployee';

function App() {   

  return (
      <div className="container">
          <Router>
              <HeaderComponent/>
              <div className="col-md-12">
                  {/* <h1 className="text-center" style={style}></h1> */}
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/home" component={Home} />
                      <Route path="/add-employee" exact component={CreateEmployee} />
                      <Route path="/home" component={Home} />
                  </Switch>
              </div>
              <FooterComponent/>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
