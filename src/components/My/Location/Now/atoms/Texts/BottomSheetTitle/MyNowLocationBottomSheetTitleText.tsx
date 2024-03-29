import React from 'react';
import styles from './MyNowLocationBottomSheetTitleText.module.css';

interface Props {
  text: string;
}

const MyNowLocationBottomSheetTitleText: React.FC<Props> = ({
  text,
}: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default MyNowLocationBottomSheetTitleText;
