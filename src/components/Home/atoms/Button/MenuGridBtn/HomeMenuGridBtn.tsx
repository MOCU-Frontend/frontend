import React from 'react';
import { colors } from '../../../../../styles/colors';
import HomeMenuBtnSubText from '../../Text/MenuBtnSub/HomeMenuBtnSubText';
import HomeMenuBtnTitleText from '../../Text/MenuBtnTitle/HomeMenuBtnTitleText';
import styles from './HomeMenuGridBtn.module.css';

interface Props {
  titleText: string;
  subText: string;
  onClick: () => void;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const HomeMenuGridBtn: React.FC<Props> = ({
  titleText,
  subText,
  onClick,
  Icon,
}: Props) => {
  return (
    <button className={styles.menuMapBtn} onClick={onClick}>
      <div className={styles.menuMapDescriptionSec}>
        <HomeMenuBtnTitleText text={titleText} />
        <HomeMenuBtnSubText text={subText} />
      </div>
      <div className={styles.iconWrapper}>
        <Icon width={32} height={32} fill={colors.subPurpleLight} />
      </div>
    </button>
  );
};

export default HomeMenuGridBtn;
