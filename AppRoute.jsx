import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class MenuTab extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li><Link to="/home">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
				
           {this.props.children}
         </div>
      )
   }
}

export default MenuTab;

ReactDOM.render((
   <Router history={browserHistory}>
      <Route path="/" component={MenuTab}>
         <IndexRoute component={Home} />
         <Route path="/home" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/contact" component={Contact} />
      </Route>
   </Router>
   
), document.getElementById('routes'))