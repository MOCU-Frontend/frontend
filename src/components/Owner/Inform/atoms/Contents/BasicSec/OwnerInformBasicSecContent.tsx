import React from 'react';
import OwnerInformSecBodyText from '../../Texts/SecBody/OwnerInformSecBodyText';
import OwnerInformSecTitleText from '../../Texts/SecTitle/OwnerInformSecTitleText';
import styles from './OwnerInformBasicSecContent.module.css';

interface Props {
  title: string;
  bodyText: string;
}

const OwnerInformBasicSecContent: React.FC<Props> = ({
  title,
  bodyText,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformSecTitleText text={title} />
      <div className={styles.bodyWrapper}>
        <OwnerInformSecBodyText text={bodyText} />
      </div>
    </div>
  );
};

export default OwnerInformBasicSecContent;
