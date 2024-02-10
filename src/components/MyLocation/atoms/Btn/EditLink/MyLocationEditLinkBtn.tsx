import React from 'react';
import { colors } from '../../../../../styles/colors';
import MyLocationSettingText from '../../../../My/Location/atoms/Text/Setting/MyLocationSettingText';
import styles from './MyLocationEditLinkBtn.module.css';
import { ReactComponent as ArrowRightIcon } from '../../../../../assets/icon/arrowRight.svg';
interface Props {
  onClick: () => void;
}

const MyLocationEditLinkBtn: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button className={styles.wholeWrapper} onClick={onClick}>
      <MyLocationSettingText
        text={'장소 추가 및 수정하기'}
        color={colors.greyDark00}
      />
      <ArrowRightIcon width={16} height={16} stroke={colors.greyLight02} />
    </button>
  );
};

export default MyLocationEditLinkBtn;
