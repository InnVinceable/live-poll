import React from 'react';

class Answerer extends React.Component {
    constructor (props) {
        super(props);
        this.getQuestion = this.getQuestion.bind(this);
        this.postAnswer = this.postAnswer.bind(this);
        this.handleYesClick = this.handleYesClick.bind(this);
        this.handleNoClick = this.handleNoClick.bind(this);
        this.state = {};
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
            <div>
                <h1>{this.state.question}</h1>
                <div className="row">
                    <div className="btn-group col-xs-4 col-xs-offset-4">
                        <button onClick={this.handleYesClick} className="col-xs-6 btn btn-lg btn-success">YES</button>
                        <button onClick={this.handleNoClick} className="col-xs-6 btn btn-lg btn-danger">NO</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Answerer;