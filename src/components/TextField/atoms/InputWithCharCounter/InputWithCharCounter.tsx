import React, { useState } from 'react';
import styles from './InputWithCharCounter.module.css';
interface Props {
  placeholder: string;
}

const InputWithCharCounter: React.FC<Props> = ({ placeholder }: Props) => {
  const [text, setText] = useState('');
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
