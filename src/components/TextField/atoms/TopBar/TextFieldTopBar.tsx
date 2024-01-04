import React from 'react';
import { ReactComponent as UndoIcon } from '../../../../assets/icon/undoCenterRegular.svg';
import { ReactComponent as CheckIcon } from '../../../../assets/icon/checkDefault.svg';
import { colors } from '../../../../styles/colors';
import styles from './TextFieldTopBar.module.css';

interface Props {
  onClickXBtn: () => void;
  onClickCheckBtn: () => void;
}

const TextFieldTopBar: React.FC<Props> = ({
  onClickXBtn = () => {},
  onClickCheckBtn = () => {},
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={onClickXBtn} className={styles.btn}>
        <UndoIcon width={48} height={48} stroke={colors.greyDark00} />
      </button>
      <button onClick={onClickCheckBtn} className={styles.btn}>
        <CheckIcon width={48} height={48} stroke={colors.greyDark00} />
      </button>
    </div>
  );
};

export default TextFieldTopBar;
