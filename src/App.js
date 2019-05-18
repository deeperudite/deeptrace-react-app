import "./mystyles.css"
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import form from './components/Form'
import result from './components/Result';

function App() {
  return (
    <Router>
      <Route exact path="/" component={form}/>
      <Route exact path="/result" component={result}/>
      <div className="App">
      </div>
    </Router>
  );
}

export default App;
