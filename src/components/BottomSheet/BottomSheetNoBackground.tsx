import React, { ReactNode, useRef } from 'react';
import BottomSheetNoBackgroundBasic from './atoms/Basic/BottomSheetNoBackgroundBasic/BottomSheetNoBackgroundBasic';
import BottomSheetTopBarLine from './atoms/TopBarLine/BottomSheetTopBarLine';

interface Props {
  children: ReactNode;
  onDragBottom: () => void;
}

const BottomSheetNoBackground: React.FC<Props> = ({
  children,
  onDragBottom,
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <BottomSheetNoBackgroundBasic wrapperRef={wrapperRef}>
      <BottomSheetTopBarLine
        wrapperRef={wrapperRef}
        onDragBottom={onDragBottom}
      />
      {children}
    </BottomSheetNoBackgroundBasic>
  );
};

export default BottomSheetNoBackground;
