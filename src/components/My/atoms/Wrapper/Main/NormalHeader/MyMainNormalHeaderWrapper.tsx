import React, { ReactNode } from 'react';
import MyMainContentHeader from '../../../Header/MainContent/MyMainContentHeader';
import styles from './MyMainNormalHeaderWrapper.module.css';

interface Props {
  children: ReactNode;
  onClick: () => void;
  headerText: string;
  gap: number;
}

const MyMainNormalHeaderWrapper: React.FC<Props> = ({
  children,
  onClick,
  headerText,
  gap,
}: Props) => {
  return (
    <div
      className={styles.wrapper}
      style={{ gap: `${gap}px` }}
      onClick={onClick}
    >
      <MyMainContentHeader titleText={headerText} />
      {children}
    </div>
  );
};

export default MyMainNormalHeaderWrapper;
