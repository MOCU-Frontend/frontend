import React from 'react';
import { colors } from '../../../../../../../styles/colors';
import OwnerInformEditCheckBox from '../../CheckBox/OwnerInformEditCheckBox';
import OwnerInformEditCheckBoxText from '../../Texts/CheckBox/OwnerInformEditCheckBoxText';
import styles from './OwnerInformEditCheckBoxContent.module.css';

interface Props {
  isChecked: boolean;
  label: string;
}

const OwnerInformEditCheckBoxContent: React.FC<Props> = ({
  isChecked,
  label,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformEditCheckBox isChecked={isChecked} />
      <OwnerInformEditCheckBoxText
        text={label}
        color={isChecked ? colors.black : colors.greyDark00}
      />
    </div>
  );
};

export default OwnerInformEditCheckBoxContent;
