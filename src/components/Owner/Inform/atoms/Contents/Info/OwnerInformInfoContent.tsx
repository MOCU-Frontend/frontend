import React from 'react';
import OwnerInformInfoSubText from '../../Texts/InfoSub/OwnerInformInfoSubText';
import OwnerInformInfoTitleText from '../../Texts/InfoTitle/OwnerInformInfoTitleText';
import styles from './OwnerInformInfoContent.module.css';

interface Props {
  title: string;
  category: string;
}

const OwnerInformInfoContent: React.FC<Props> = ({
  title,
  category,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformInfoSubText text={category} />
      <OwnerInformInfoTitleText text={title} />
    </div>
  );
};

export default OwnerInformInfoContent;
