import React from 'react';
import styles from './StoreDangolAddCheckBox.module.css';
import { ReactComponent as CheckIcon } from '../../../../../../assets/icon/checkDefault.svg';
import { colors } from '../../../../../../styles/colors';
interface Props {
  isChecked: boolean;
  onClick: () => void;
}

const StoreDangolAddCheckBox: React.FC<Props> = ({
  isChecked,
  onClick,
}: Props) => {
  return (
    <button
      className={styles.wholeWrapper}
      style={{
        backgroundColor: isChecked ? colors.mainPurple : colors.white,
        border: isChecked ? 'none' : `1px solid ${colors.greyLight01}`,
      }}
      onClick={onClick}
    >
      <CheckIcon width={18} height={18} stroke={colors.white} />
    </button>
  );
};

export default StoreDangolAddCheckBox;
