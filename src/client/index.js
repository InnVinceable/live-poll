import React from 'react';
import ReactDOM from 'react-dom';
import Answerer from './Answerer';
import Asker from './Asker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <Route path="/answer" component={Answerer}/>
            <Route path="/" component={Asker}/>
        </div>
    </Router>, document.getElementById('root'));