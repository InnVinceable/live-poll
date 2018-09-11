import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
require('./Asker.css')

class AskerSecurity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ""
        }
        this.handleProceedClick = this.handleProceedClick.bind(this);
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
    }

    handleTextInputChange(e) {
        this.setState({password: e.target.value});
    }

    handleProceedClick() {
        debugger;
        if (this.state.password == "test")
        {
            this.props.history.push('/jfasdneRRinfaisfasdkfjakdsjtkanlsnjdfkjsandlt');
        }
    }

    render() {
        return (
            <div> 
                <div className="row">
                    <label for="inp" class="col-xs-8 col-xs-offset-2 inp">
                        <input type="password" id="inp" placeholder="&nbsp;" value={this.state.password} onChange={this.handleTextInputChange} />
                        <span class="label">Password</span>
                        <span class="border"></span>
                    </label>
                </div>
                <button className="col-xs-2 col-xs-offset-5 btn btn-lg btn-info" onClick={this.handleProceedClick}>Proceed</button>
            </div>
        );
    }
}

export default AskerSecurity;