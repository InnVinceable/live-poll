import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
require('./Asker.css')

class Asker extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.postQuestion = this.postQuestion.bind(this);
        this.aggregateAnswerData = this.aggregateAnswerData.bind(this);
        this.getAnswers = this.getAnswers.bind(this);
        this.state = {
            yesData: [
                {category: "YES", count: 0}
            ],
            noData: [
                {category: "NO", count: 0}
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
            yesData: [
                {category: "YES", count: yeses}
            ]
        });
        this.setState({
            noData: [
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
                {!this.state.submitted && <div>
                    <div className="row">
                        <label for="inp" class="col-xs-8 col-xs-offset-2 inp" >
                            <input type="text" id="inp" placeholder="&nbsp;" value={this.state.question} onChange={this.handleTextInputChange} />
                            <span class="label">Question</span>
                            <span class="border"></span>
                        </label>
                    </div>
                    <div className="row">
                        <button className="col-xs-2 col-xs-offset-5 btn btn-lg btn-info" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
                }
                {this.state.submitted && <div className="row">
                    <h2 className="col-xs-8 col-xs-offset-2 text-center">{this.state.question}</h2>
                </div>}
                <br />
                {this.state.submitted && <div className="row">
                    <div className="col-xs-8 col-xs-offset-2">
                        <VictoryChart domainPadding={80} animate={{duration: 500}}>
                            <VictoryAxis tickValues={[1,2]} tickFormat={["YES", "NO"]}/>

                            <VictoryBar 
                                style={{ data: { fill: '#66ff4f', width: 50 }}}
                                data={this.state.yesData} 
                                x="category" 
                                y="count"/>

                            <VictoryBar 
                                style={{ data: { fill: '#ff3535', width: 50 }}} 
                                data={this.state.noData} 
                                x="category" 
                                y="count"/>
                        </VictoryChart>
                    </div>
                </div>}
            </div>
        );
    }
}

export default Asker;