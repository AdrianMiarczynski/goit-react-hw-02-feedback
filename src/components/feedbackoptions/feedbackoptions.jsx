import css from './feedbackoptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css['btn-wrapper']}>
      {options.map((btnName, id) => (
        <button key={id} onClick={() => onLeaveFeedback(btnName)}>
          {btnName}
        </button>
      ))}
    </div>
  );
};
