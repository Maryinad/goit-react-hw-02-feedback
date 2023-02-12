import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return total > 0 ? (
    <>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}</p>
    </>
  ) : (
    <Notification>There is no feedback</Notification>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
