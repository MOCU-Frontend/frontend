import React from 'react';
import { colors } from '../../../../../styles/colors';
import HomeMenuBtnInformText from '../../Text/MenuBtnInform/HomeMenuBtnInformText';
import HomeMenuBtnSubText from '../../Text/MenuBtnSub/HomeMenuBtnSubText';
import HomeMenuBtnTitleText from '../../Text/MenuBtnTitle/HomeMenuBtnTitleText';
import styles from './HomeMenuFullBtn.module.css';

interface Props {
  titleText: string;
  subText: string;
  informText: string;
  onClick: () => void;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  border?: number;
  borderColor?: string;
  IsIconStroke?: boolean;
}

const HomeMenuFullBtn: React.FC<Props> = ({
  titleText,
  subText,
  informText,
  onClick,
  Icon,
  border,
  borderColor,
  IsIconStroke = true,
}: Props) => {
  return (
    <button
      className={styles.menuMapBtn}
      onClick={onClick}
      style={
        border && borderColor
          ? { border: `${border}px solid ${borderColor}` }
          : {}
      }
    >
      <div className={styles.menuMapDescriptionSec}>
        <HomeMenuBtnTitleText text={titleText} />
        <HomeMenuBtnSubText text={subText} />
      </div>
      <HomeMenuBtnInformText text={informText} />
      <Icon
        width={32}
        height={32}
        stroke={IsIconStroke ? colors.subPurpleLight : 'none'}
        fill={!IsIconStroke ? colors.subPurpleLight : 'none'}
        className={styles.mapIcon}
      />
    </button>
  );
};

export default HomeMenuFullBtn;
