import styles from './Options.module.css';

const Options = ({ onLeaveFeedback, onResetFeedback, totalFeedback }) => {
  return (
    <div className={styles.options}>
      <button className={styles.good} onClick={() => onLeaveFeedback('good')}>Good</button>
      <button className={styles.neutral} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button className={styles.bad} onClick={() => onLeaveFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button className={styles.reset} onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;