import css from './feedbackoptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css['btn-wrapper']}>
      <button type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};
