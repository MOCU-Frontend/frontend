import React from 'react';
import BottomSheetBasic from './atoms/Basic/BottomSheetBasic';
import BottomSheetTopBarLine from './atoms/TopBarLine/BottomSheetTopBarLine';
import styles from './BottomSheetStory.module.css';

interface Props {}

const BottomSheetStory: React.FC<Props> = ({}: Props) => {
  return (
    <BottomSheetBasic>
      <BottomSheetTopBarLine />
      <div className={styles.exDiv}>ex</div>
    </BottomSheetBasic>
  );
};

export default BottomSheetStory;
