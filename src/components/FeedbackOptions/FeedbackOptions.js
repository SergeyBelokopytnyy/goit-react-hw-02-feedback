import PropTypes from 'prop-types';
import React from 'react';

export default function FeedbacOptions({ options, onLeaveFeedback }) {
  const buttons = Object.keys(options);
  return (
    <ul>
      {buttons.map(button => (
        <li key={button}>
          <button
            type="button"
            onClick={() => {
              onLeaveFeedback(button);
            }}
          >
            {button}
          </button>
        </li>
      ))}
      {/* <li>
        <button type="button" onClick={options.onGood}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={options.onNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={options.onBad}>
          Bad
        </button>
      </li> */}
    </ul>
  );
}

FeedbacOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
