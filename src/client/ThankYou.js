import React from 'react';
require('./styles.css');

const thankYouPage = (props) => {
    return (
        <div className="flex-center-vertically col-md-offset-2 col-md-8 text-center">
            <h1>Thank you for your response</h1>
            <h2>You answered {props.history.state.answer}</h2>
        </div>
    );
}

export default thankYouPage;