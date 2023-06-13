import css from './feedbackoptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css['btn-wrapper']}>
      <button
        className={css['btn-good']}
        type="button"
        onClick={this.countGoodFeedback}
      >
        Good
      </button>
      <button
        className={css['btn-natural']}
        type="button"
        onClick={this.countNeutralFeedback}
      >
        Neutral
      </button>
      <button
        className={css['btn-bad']}
        type="button"
        onClick={this.countBadFeedback}
      >
        Bad
      </button>
    </div>
  );
};
