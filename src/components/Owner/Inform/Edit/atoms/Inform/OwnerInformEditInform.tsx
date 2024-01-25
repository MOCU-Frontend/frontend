import React from 'react';
import styles from './OwnerInformEditInform.module.css';
import { ReactComponent as InformIcon } from '../../../../../../assets/icon/information.svg';
import { colors } from '../../../../../../styles/colors';
import OwnerInformEditInformText from '../Texts/Inform/OwnerInformEditInformText';
interface Props {
  text: string;
}

const OwnerInformEditInform: React.FC<Props> = ({ text }: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <InformIcon width={14} height={14} fill={colors.grey} />
      <OwnerInformEditInformText text={text} />
    </div>
  );
};

export default OwnerInformEditInform;
