import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = state;
    return (
      <>
        <h2>Please leave feedback</h2>
        <button>good</button>
        <button>neutral</button>
        <button>bad</button>
        <h2>Statistics</h2>
        <p>Good: </p>
        <p>Neutral: </p>
        <p>Bad: </p>
      </>
    );
  }
}
