import React from 'react';
import ShortcutButton from './pure-components/shortcut-button';
require('./styles.css')

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
        if (this.state.password == "devday")
        {
            this.props.history.push('/jfasdneRRinfaisfasdkfjakdsjtkanlsnjdfkjsandlt');
        }
    }

    render() {
        return (
            <div className="flex-center-vertically col-md-offset-2 col-md-8"> 
                <div className="row">
                    <label for="inp" class="col-xs-8 col-xs-offset-2 inp">
                        <input type="password" autoFocus={true} id="inp" placeholder="&nbsp;" value={this.state.password} onChange={this.handleTextInputChange} />
                        <span class="label">Password</span>
                        <span class="border"></span>
                    </label>
                </div>
                <ShortcutButton className="col-xs-2 col-xs-offset-5 btn btn-xl btn-info raised" onClick={this.handleProceedClick}>Proceed</ShortcutButton>
            </div>
        );
    }
}

export default AskerSecurity;