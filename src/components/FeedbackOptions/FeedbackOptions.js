import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css';

export default function FeedbacOptions({ options, onLeaveFeedback }) {
  const buttons = Object.keys(options);
  return (
    <ul className={css.list_buttons}>
      {buttons.map(button => (
        <li key={button} className={css.list_buttons_item}>
          <button
            className={css.options_button}
            type="button"
            onClick={() => {
              onLeaveFeedback(button);
            }}
          >
            {button}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbacOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
