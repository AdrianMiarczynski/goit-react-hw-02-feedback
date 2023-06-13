// import css from './statistics.module.css';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
export const Statistics = ({
    
}) => {
  return (
    <div>
      <button type="button" onClick={this.countGoodFeedback}>
        Good
      </button>
      <button type="button" onClick={this.countNeutralFeedback}>
        Neutral
      </button>
      <button type="button" onClick={this.countBadFeedback}>
        Bad
      </button>
      <h2>Statistics</h2>
      <div>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
          <li>Total:{this.countTotalFeedback()}</li>
          <li>Positive feedback:{this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div>
    </div>
  );
};
