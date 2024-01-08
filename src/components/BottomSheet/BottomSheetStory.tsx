import React from 'react';
import BottomSheetBasic from './atoms/Basic/BottomSheetBasic';
import BottomSheetTopBarLine from './atoms/TopBarLine/BottomSheetTopBarLine';
import styles from './BottomSheetStory.module.css';

interface Props {
  isBackgroundBlur?: boolean;
}

const BottomSheetStory: React.FC<Props> = ({
  isBackgroundBlur = true,
}: Props) => {
  return (
    <BottomSheetBasic isBackgroundBlur={isBackgroundBlur}>
      <BottomSheetTopBarLine />
      <div className={styles.exDiv}>ex</div>
    </BottomSheetBasic>
  );
};

export default BottomSheetStory;
