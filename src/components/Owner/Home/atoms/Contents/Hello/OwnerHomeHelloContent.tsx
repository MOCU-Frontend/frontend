import React from 'react';
import OwnerHomeHelloContentText from '../Texts/HelloContent/OwnerHomeHelloContentText';
import styles from './OwnerHomeHelloContent.module.css';

interface Props {
  userName: string;
}

const OwnerHomeHelloContent: React.FC<Props> = ({ userName }: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerHomeHelloContentText
        text={`${userName}님 오늘도 힘찬하루되세요!`}
      />
    </div>
  );
};

export default OwnerHomeHelloContent;
