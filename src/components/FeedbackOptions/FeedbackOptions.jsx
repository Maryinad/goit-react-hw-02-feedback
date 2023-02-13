import React from 'react';
import PropTypes from 'prop-types';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
