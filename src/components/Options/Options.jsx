import styles from "./Options.module.css";

export const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={styles.buttonsWrap}>
      <button className={styles.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={styles.button}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={styles.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback ? (
        <button className={styles.button} onClick={() => resetFeedback()}>
          Reset
        </button>
      ) : null}
    </div>
  );
};
