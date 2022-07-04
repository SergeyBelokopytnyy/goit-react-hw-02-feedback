import propTypes from 'prop-types';
import React from 'react';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <ul className={css.statistics}>
        <li className={css.statistics_item}>
          <p>Good:{good}</p>
        </li>
        <li className={css.statistics_item}>
          <p>Neutral:{neutral}</p>
        </li>
        <li className={css.statistics_item}>
          <p>Bad:{bad}</p>
        </li>
        <li className={css.statistics_item}>
          <p>Total:{total}</p>
        </li>
        <li className={css.statistics_item}>
          <p>Positive feedback:{positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
