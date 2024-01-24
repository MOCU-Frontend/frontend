import React from 'react';
import styles from './StoreSearchCard.module.css';

interface Props {
  /**
   * 쿠폰 개수를 메인으로 표시할지에 대한 여부
   */
  couponMain: boolean;

  /**
   * 이벤트 진행 여부
   */
  eventOn?: boolean;

  /**
   * 필터 속 텍스트
   */
  title: string;

  /**
   * 사용 가능 쿠폰 개수
   */
  couponCount: number;

  /**
   * 현 위치에서 몇 m 떨어져있는 지
   */
  distance: number;
}

const StoreSearchCard: React.FC<Props> = ({
  couponMain,
  eventOn,
  title,
  couponCount,
  distance,
}: Props) => {
  return (
    <>
      <div className={styles.wrapper}>
        {couponMain && (
          <>
            <div className={styles.cardStoreInformation}>
              <div className={styles.cardFirstInfo}>{couponCount}/10</div>
              <div className={styles.cardSecondInfo}>{title}</div>
            </div>

            <div className={styles.cardFarFrom}>현 위치에서 {distance}M </div>
          </>
        )}

        {!couponMain && (
          <>
            {eventOn && (
              <div className={styles.cardEventIng}>이벤트 진행 중</div>
            )}

            <div className={styles.cardStoreInformation}>
              <div className={styles.cardFirstInfo}>{title}</div>
              <div className={styles.cardSecondInfo}>
                사용 가능 쿠폰: {couponCount}개{' '}
              </div>
            </div>

            <div className={styles.cardFarFrom}>현 위치에서 {distance}M </div>
          </>
        )}
      </div>
    </>
  );
};

export default StoreSearchCard;
