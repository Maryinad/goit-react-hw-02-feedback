import React from 'react';
import PropTypes from 'prop-types';

export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button type="button" name="good" onClick={onLeaveFeedback}>
        good
      </button>
      <button type="button" name="neutral" onClick={onLeaveFeedback}>
        neutral
      </button>
      <button type="button" name="bad" onClick={onLeaveFeedback}>
        bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
