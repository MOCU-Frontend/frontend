import React from 'react';
import styles from './GiftCard.module.css';
import storeImg from '../../../../assets/imgs/storeExample.png';

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

const GiftCard: React.FC<Props> = ({ cafeTitle, foodTitle, foodPrice }) => {
  return (
    <button className={styles.wrapper}>
      <img src={storeImg} alt='' className={styles.imageWrapper} />
      <div className={styles.textWrapper}>
        <div className={styles.cafeTitle}>{cafeTitle}</div>
        <div className={styles.foodTitle}>{foodTitle}</div>
        <div className={styles.foodPrice}>{foodPrice}원</div>
      </div>
    </button>
  );
};

export default GiftCard;
