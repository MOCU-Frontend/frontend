import React from 'react';
import styles from './OwnerInformEditCheckBox.module.css';

interface Props {
  isChecked: boolean;
}

const OwnerInformEditCheckBox: React.FC<Props> = ({ isChecked }: Props) => {
  return (
    <div className={styles.outerBox}>
      <div
        className={styles.innerCircle}
        style={
          isChecked
            ? { right: '1px', left: undefined }
            : { left: '1px', right: undefined }
        }
      ></div>
    </div>
  );
};

export default OwnerInformEditCheckBox;
