import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

class Asker extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.postQuestion = this.postQuestion.bind(this);
        this.aggregateAnswerData = this.aggregateAnswerData.bind(this);
        this.getAnswers = this.getAnswers.bind(this);
        this.state = {
            questionData: [
                {category: "YES", count: 123},
                {category: "NO", count: 200}
            ]
        };
    }

    handleTextInputChange(event) {
        this.setState({question: event.target.value});
    }

    handleSubmit() {
        this.postQuestion(this.state.question);
    }

    postQuestion(question) {
        fetch("/question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ question })
        }).then(() => {
            this.setState({ submitted: true });
            setInterval( this.getAnswers, 2000 );
        });
    }

    aggregateAnswerData(data) {
        var yeses = 0;
        var nos = 0;
        data.forEach(element => {
            if (element == "YES") yeses++;
            if (element == "NO") nos++;
        });
        this.setState({
            questionData: [
                {category: "YES", count: yeses},
                {category: "NO", count: nos}
            ]
        });
    }

    getAnswers() {
        fetch("/answer")
            .then(res => res.json())
            .then(data => this.aggregateAnswerData(data))
            .catch(error => {
                console.error(error);
                this.setState({ error, question: 'An error occurred: Could not fetch answers' })
            });
    }

    render() {
        return (
            <div>
                <br />
                <br />
                {!this.state.submitted && <div className="row">
                    <input className="col-xs-8 col-xs-offset-2 input-lg" type="text" value={this.state.question} onChange={this.handleTextInputChange} />
                </div>}
                {this.state.submitted && <div className="row">
                    <h2 className="col-xs-8 col-xs-offset-2 text-center">{this.state.question}</h2>
                </div>}
                <br />
                {!this.state.submitted && <div className="row">
                    <button className="col-xs-2 col-xs-offset-5 btn btn-lg btn-info" onClick={this.handleSubmit}>Submit</button>
                </div>}
                {this.state.submitted && <div className="row">
                    <button className="col-xs-2 col-xs-offset-5 btn btn-lg btn-info" disabled>Submitted</button>
                </div>}
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-2">
                        <VictoryChart domainPadding={80}>
                            <VictoryAxis tickValues={[1,2]} tickFormat={["YES", "NO"]}/>
                            <VictoryBar data={this.state.questionData} x="category" y="count"/>
                        </VictoryChart>
                    </div>
                </div>
            </div>
        );
    }
}

export default Asker;