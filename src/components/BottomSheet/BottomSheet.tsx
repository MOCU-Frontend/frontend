import React, { ReactNode } from 'react';
import BottomSheetBasic from './atoms/Basic/BottomSheetBasic';
import BottomSheetTopBarLine from './atoms/TopBarLine/BottomSheetTopBarLine';

interface Props {
  children: ReactNode;
}

const BottomSheet: React.FC<Props> = ({ children }: Props) => {
  return (
    <BottomSheetBasic>
      <BottomSheetTopBarLine />
      {children}
    </BottomSheetBasic>
  );
};

export default BottomSheet;
