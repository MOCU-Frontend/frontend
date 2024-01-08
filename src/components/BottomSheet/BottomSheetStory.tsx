import React, { useRef } from 'react';
import BottomSheetBasic from './atoms/Basic/BottomSheetBasic';
import BottomSheetTopBarLine from './atoms/TopBarLine/BottomSheetTopBarLine';
import styles from './BottomSheetStory.module.css';

interface Props {
  isBackgroundBlur?: boolean;
  onDragBottom: () => void;
}

const BottomSheetStory: React.FC<Props> = ({
  isBackgroundBlur = true,
  onDragBottom,
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  return (
    <BottomSheetBasic
      isBackgroundBlur={isBackgroundBlur}
      wrapperRef={wrapperRef}
    >
      <BottomSheetTopBarLine
        wrapperRef={wrapperRef}
        onDragBottom={onDragBottom}
      />
      <div className={styles.exDiv}>ex</div>
    </BottomSheetBasic>
  );
};

export default BottomSheetStory;
