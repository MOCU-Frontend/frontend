import React from 'react';
import LoginSubTitleBoxText from '../../Texts/SubTitleBox/LoginSubTitleBoxText';
import styles from './LoginSubTitleBox.module.css';

interface Props {
  text: string;
}

const LoginSubTitleBox: React.FC<Props> = ({ text }: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <LoginSubTitleBoxText text={text} />
    </div>
  );
};

export default LoginSubTitleBox;
