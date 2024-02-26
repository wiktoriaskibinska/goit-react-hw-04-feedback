import React from 'react';
import css from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.bttnsContainer}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          id={option}
          onClick={onLeaveFeedback}
          className={css.feedbackBttn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
Feedback.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default Feedback;
