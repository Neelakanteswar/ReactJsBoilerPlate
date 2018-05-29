/////////////////////////////////////////////////////
// project : React Boilerplate;
// year : 2018;
// author : Neelakanteswar Patnaik;
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
// react imports
/////////////////////////////////////////////////////
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


/////////////////////////////////////////////////////
// components of the application
/////////////////////////////////////////////////////
import { Header } from './components/Header';
import { Home } from './components/Home';

/////////////////////////////////////////////////////
// styles of the application
/////////////////////////////////////////////////////
import '../app/assets/scss/master.scss';



class App extends React.Component {
  render() {
    return (
      <div>


          <Router>

              <div>
                <Header/>
                <Switch>
                   <Route exact path='/' component={Home} />
                   <Route exact path='/home' component={Home} />
                   <Route exact path='/products' component={Products} />
                   <Route exact path='/contact' component={Contact} />
                </Switch>
              </div>



          </Router>

      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
