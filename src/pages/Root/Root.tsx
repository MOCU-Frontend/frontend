import React from 'react';
import styles from './Root.module.css';

interface Props {
  /**
   * content text
   */
  text: string;
}

/**
 * Primary UI component for user interaction
 */
const Root = ({ text }: Props) => {
  return <div className={styles.wrapper}>{text}</div>;
};

export default Root;
