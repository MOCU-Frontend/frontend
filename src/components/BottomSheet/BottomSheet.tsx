import React, { ReactNode } from 'react';
import BottomSheetBasic from './atoms/Basic/BottomSheetBasic';
import BottomSheetTopBarLine from './atoms/TopBarLine/BottomSheetTopBarLine';

interface Props {
  children: ReactNode;
  isBackgroundBlur?: boolean;
}

const BottomSheet: React.FC<Props> = ({
  children,
  isBackgroundBlur = true,
}: Props) => {
  return (
    <BottomSheetBasic isBackgroundBlur={isBackgroundBlur}>
      <BottomSheetTopBarLine />
      {children}
    </BottomSheetBasic>
  );
};

export default BottomSheet;
