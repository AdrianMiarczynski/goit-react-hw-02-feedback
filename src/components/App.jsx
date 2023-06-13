import { Component } from 'react';
import { Section } from './section/section';
import { Statistics } from './statistics/statistics';
import css from './feedbackoptions/feedbackoptions.module.css';
// import { FeedbackOptions } from './feedbackoptions';
import { Notification } from './notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGoodFeedback = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));
  };
  countNeutralFeedback = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
  };
  countBadFeedback = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) return 0;
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title={'Please leave feedback'} />
        {/* <FeedbackOptions /> */}
        <div className={css['btn-wrapper']}>
          <button type="button" onClick={this.countGoodFeedback}>
            Good
          </button>
          <button type="button" onClick={this.countNeutralFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.countBadFeedback}>
            Bad
          </button>
        </div>
        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercontage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
