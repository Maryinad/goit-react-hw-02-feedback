import React, { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedback = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });

    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });

    this.setState(prevState => {
      return {
        positivePercentage: Math.round(
          (prevState.good * 100) / prevState.total
        ),
      };
    });
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <>
        <Section>Please leave feedback</Section>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}
