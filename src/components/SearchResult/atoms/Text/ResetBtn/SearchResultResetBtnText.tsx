import React from 'react';
import styles from './SearchResultResetBtnText.module.css';

interface Props {
  text: string;
}

const SearchResultResetBtnText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default SearchResultResetBtnText;
