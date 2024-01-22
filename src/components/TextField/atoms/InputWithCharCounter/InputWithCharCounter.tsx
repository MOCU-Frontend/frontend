import React, { useState } from 'react';
import styles from './InputWithCharCounter.module.css';
interface Props {
  placeholder: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const InputWithCharCounter: React.FC<Props> = ({
  placeholder,
  text,
  setText,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className={styles.counterWrapper}>
        <p className={styles.counterText}>{text.length} 자</p>
      </div>
    </div>
  );
};

export default InputWithCharCounter;
