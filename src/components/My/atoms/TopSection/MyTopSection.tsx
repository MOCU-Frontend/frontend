import React from 'react';
import MyTopSubText from '../Text/TopSub/MyTopSubText';
import MyTopTitleText from '../Text/TopTitle/MyTopTitleText';
import styles from './MyTopSection.module.css';

interface Props {
  titleText: string;
  subText: string;
}

const MyTopSection: React.FC<Props> = ({ titleText, subText }: Props) => {
  return (
    <div className={styles.wrapper}>
      <MyTopTitleText text={titleText} />
      <MyTopSubText text={subText} />
    </div>
  );
};

export default MyTopSection;
