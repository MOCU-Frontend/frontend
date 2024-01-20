import React from 'react';
import styles from './PresentButton.module.css';

interface Props {
  /*
   * 식당 이름
   */
  cafeTitle: string;

  /*
   * 음식 이름
   */
  foodTitle: string;

  /*
   * 음식 가격
   */
  foodPrice: string;
}

const PresentButton: React.FC<Props> = ({
  cafeTitle,
  foodTitle,
  foodPrice,
}) => {
  return (
    <button className={styles.wrapper}>
      <div className={styles.imageWrapper} />
      <div className={styles.textWrapper}>
        <div className={styles.cafeTitle}>{cafeTitle}</div>
        <div className={styles.foodTitle}>{foodTitle}</div>
        <div className={styles.foodPrice}>{foodPrice}원</div>
      </div>
    </button>
  );
};

export default PresentButton;
