import React, { ReactNode } from 'react';
import BottomSheetNoBackgroundBasic from './atoms/Basic/BottomSheetNoBackgroundBasic/BottomSheetNoBackgroundBasic';
import BottomSheetTopBarLine from './atoms/TopBarLine/BottomSheetTopBarLine';

interface Props {
  children: ReactNode;
}

const BottomSheetNoBackground: React.FC<Props> = ({ children }: Props) => {
  return (
    <BottomSheetNoBackgroundBasic>
      <BottomSheetTopBarLine />
      {children}
    </BottomSheetNoBackgroundBasic>
  );
};

export default BottomSheetNoBackground;
