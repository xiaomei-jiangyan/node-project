import React, { Component } from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {CommonWrapper} from "../commonComponent/index.js"
import {Index} from '../index/index.js'
import {Detail} from "../detail/index.js"
import "./App.css"
class App extends Component {
  render() {
    return (
         <div>
            <Router  history={browserHistory}>
               <Route path="/" component={CommonWrapper}>
                  <IndexRoute component={Index}></IndexRoute>
                  <Route path='detail/:id' component={Detail}></Route>
               </Route>
           </Router>
         </div>
     );
 }
}
export default App;
