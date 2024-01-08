import React, { ReactNode, useRef } from 'react';
import BottomSheetBasic from './atoms/Basic/BottomSheetBasic';
import BottomSheetTopBarLine from './atoms/TopBarLine/BottomSheetTopBarLine';

interface Props {
  children: ReactNode;
  isBackgroundBlur?: boolean;
  onDragBottom: () => void;
}

const BottomSheet: React.FC<Props> = ({
  children,
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
      {children}
    </BottomSheetBasic>
  );
};

export default BottomSheet;
