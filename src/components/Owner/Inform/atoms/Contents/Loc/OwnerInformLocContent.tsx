import React from 'react';
import OwnerInformLocText from '../../Texts/Loc/OwnerInformLocText';
import styles from './OwnerInformLocContent.module.css';
import { ReactComponent as ArrowRightIcon } from '../../../../../../assets/icon/arrowRight.svg';
import { colors } from '../../../../../../styles/colors';
interface Props {
  locText: string;
}

const OwnerInformLocContent: React.FC<Props> = ({ locText }: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformLocText text={locText} />
      <ArrowRightIcon width={16} height={16} stroke={colors.greyLight02} />
    </div>
  );
};

export default OwnerInformLocContent;
