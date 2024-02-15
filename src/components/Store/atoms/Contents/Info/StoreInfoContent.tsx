import React from 'react';
import StoreInfoBodyText from '../../Text/InfoBody/StoreInfoBodyText';
import StoreInfoTitleText from '../../Text/InfoTitle/StoreInfoTitleText';
import styles from './StoreInfoContent.module.css';

interface Props {
  title: string | undefined;
  category: string | undefined;
}

const StoreInfoContent: React.FC<Props> = ({ title, category }: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <StoreInfoBodyText text={category} />
      <StoreInfoTitleText text={title} />
    </div>
  );
};

export default StoreInfoContent;
