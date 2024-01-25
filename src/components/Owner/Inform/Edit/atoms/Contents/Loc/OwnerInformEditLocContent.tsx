import React from 'react';
import OwnerInformSecTitleText from '../../../../atoms/Texts/SecTitle/OwnerInformSecTitleText';
import OwnerInformEditLoc from '../../Loc/OwnerInformEditLoc';
import styles from './OwnerInformEditLocContent.module.css';

interface Props {
  locText: string;
  onClick: () => void;
}

const OwnerInformEditLocContent: React.FC<Props> = ({
  locText,
  onClick,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformSecTitleText text='위치 설정' />
      <OwnerInformEditLoc onClick={onClick} locText={locText} />
    </div>
  );
};

export default OwnerInformEditLocContent;
