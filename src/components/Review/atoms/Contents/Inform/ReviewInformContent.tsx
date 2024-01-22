import React from 'react';
import ReviewInformTitleText from '../../Text/InformTitle/ReviewInformTitleText';
import styles from './ReviewInformContent.module.css';

interface Props {
  storeName: string;
}

const ReviewInformContent: React.FC<Props> = ({ storeName }: Props) => {
  return (
    <section className={styles.wholeWrapper}>
      <div className={styles.storeBox}></div>
      <ReviewInformTitleText text={storeName} />
    </section>
  );
};

export default ReviewInformContent;
