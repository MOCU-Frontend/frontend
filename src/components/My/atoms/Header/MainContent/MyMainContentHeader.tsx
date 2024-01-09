import React from 'react';
import MyMainContentHeaderTitleText from '../../Text/MainContentHeaderTitle/MyMainContentHeaderTitleText';
import styles from './MyMainContentHeader.module.css';
import { ReactComponent as ArrowRightIcon } from '../../../../../assets/icon/arrowRight.svg';
import { colors } from '../../../../../styles/colors';
interface Props {
  titleText: string;
}

const MyMainContentHeader: React.FC<Props> = ({ titleText }: Props) => {
  return (
    <header className={styles.wrapper}>
      <MyMainContentHeaderTitleText text={titleText} />
      <ArrowRightIcon width={16} height={16} stroke={colors.greyLight02} />
    </header>
  );
};

export default MyMainContentHeader;
