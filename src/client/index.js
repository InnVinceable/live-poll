import React from 'react';
import ReactDOM from 'react-dom';
import Answerer from './Answerer';
import Asker from './Asker';
import AskerSecurity from './AskerSecurity';
import { BrowserRouter, Route, Link } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Link to="/Asker"><div className="btn btn-xs btn-info">Ask a question</div></Link>
            <Route exact path="/" component={Answerer}/>
            <Route path="/Asker" component={AskerSecurity}/>
            <Route path="/jfasdneRRinfaisfasdkfjakdsjtkanlsnjdfkjsandlt" component={Asker} />
        </div>
    </BrowserRouter>, document.getElementById('root'));