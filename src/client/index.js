import React from 'react';
import ReactDOM from 'react-dom';
import Answerer from './Answerer';
import Asker from './Asker';
import AskerSecurity from './AskerSecurity';
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Answerer}/>
            <Route path="/Asker" component={AskerSecurity}/>
            <Route path="/jfasdneRRinfaisfasdkfjakdsjtkanlsnjdfkjsandlt" component={Asker} />
        </div>
    </BrowserRouter>, document.getElementById('root'));