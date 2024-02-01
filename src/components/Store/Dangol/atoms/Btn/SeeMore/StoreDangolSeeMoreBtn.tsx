import React from 'react';
import StoreDangolSeeMoreBtnText from '../../Texts/SeeMoreBtn/StoreDangolSeeMoreBtnText';
import styles from './StoreDangolSeeMoreBtn.module.css';
import { ReactComponent as ArrowRightIcon } from '../../../../../../assets/icon/arrowRight.svg';
import { colors } from '../../../../../../styles/colors';
interface Props {
  btnText: string;
  onClick: () => void;
}

const StoreDangolSeeMoreBtn: React.FC<Props> = ({
  btnText,
  onClick,
}: Props) => {
  return (
    <button className={styles.wholeWrapper} onClick={onClick}>
      <StoreDangolSeeMoreBtnText text={btnText} />
      <ArrowRightIcon width={16} height={16} stroke={colors.greyLight02} />
    </button>
  );
};

export default StoreDangolSeeMoreBtn;
