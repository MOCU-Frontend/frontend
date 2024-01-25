import React from 'react';
import { colors } from '../../../../../../styles/colors';
import styles from './OwnerInformEditCheckBox.module.css';

interface Props {
  isChecked: boolean;
}

const OwnerInformEditCheckBox: React.FC<Props> = ({ isChecked }: Props) => {
  return (
    <div
      className={styles.outerBox}
      style={{
        backgroundColor: isChecked ? colors.mainPurple : colors.greyLight02,
      }}
    >
      <div
        className={styles.innerCircle}
        style={
          isChecked
            ? { transform: 'translate(29px,0)' }
            : { transform: 'translate(0px,0)' }
        }
      ></div>
    </div>
  );
};

export default OwnerInformEditCheckBox;
