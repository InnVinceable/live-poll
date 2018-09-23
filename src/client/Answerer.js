import React from 'react';
import {hotkeys} from 'react-keyboard-shortcuts'
require('./styles.css')

class Answerer extends React.Component {
    constructor (props) {
        super(props);
        this.getQuestion = this.getQuestion.bind(this);
        this.postAnswer = this.postAnswer.bind(this);
        this.handleYesClick = this.handleYesClick.bind(this);
        this.handleNoClick = this.handleNoClick.bind(this);
        this.state = {};
    }

    hot_keys = {
        'alt+n': {
          priority: 1,
          handler: (event) => this.props.history.push('/asker'),
        },
    }

    componentDidMount() {
        this.getQuestion();
    }

    getQuestion() {
        fetch('/question')
            .then(res => res.json())
            .then(data => this.setState({ question: data.question }))
            .catch(error => {
                console.error(error);
                this.setState({ error, question: 'An error occurred: Could not fetch question' })
            });
    }

    postAnswer(answer) {
        fetch('/answer', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ answer })
          });
    }

    handleYesClick() {
        this.postAnswer('YES');
    }

    handleNoClick() {
        this.postAnswer('NO');
    }

    render() {
        return (
            <div className="flex-center-vertically col-md-offset-2 col-md-8">
                {this.state.question === "" && <h1 className="col-xs-12 text-center">No questions asked</h1>}
                {this.state.question !== "" && <h1 className="col-xs-12 text-center">{this.state.question}</h1>}
                {this.state.question !== "" && !this.state.error  &&
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-2">
                        <button onClick={this.handleYesClick} className="col-xs-4 btn btn-xl btn-success raised">YES</button>
                        <button onClick={this.handleNoClick} className="col-xs-4 col-xs-offset-4 btn btn-xl btn-danger raised">NO</button>
                    </div>
                </div>}
            </div>
        )
    }
}

export default hotkeys(Answerer);