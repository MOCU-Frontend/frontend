import React from 'react';
import styles from './OwnerCouponItem.module.css';
import { ReactComponent as ProfileIcon } from '../../../../../assets/icon/profile.svg';
import { ReactComponent as ArrowRightIcon } from '../../../../../assets/icon/arrowRight.svg';
import { ReactComponent as MoreIcon } from '../../../../../assets/icon/more.svg';
import { colors } from '../../../../../styles/colors';
import OwnerCouponDangolBadge from '../Badge/Dangol/OwnerCouponDangolBadge';
import OwnerCouponItemNameText from '../Text/ItemName/OwnerCouponItemNameText';
import OwnerCouponItemTotalText from '../Text/ItemTotal/OwnerCouponItemTotalText';
import OwnerCouponItemSubText from '../Text/ItemSub/OwnerCouponItemSubText';
import OwnerCouponItemReviewText from '../Text/ItemReview/OwnerCouponItemReviewText';
interface Props {
  isDangol: boolean;
  userName: string;
  accumText: string;
  couponNum: number;
}

const OwnerCouponItem: React.FC<Props> = ({
  isDangol,
  userName,
  accumText,
  couponNum,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.leftWrapper}>
        <ProfileIcon
          width={48}
          height={48}
          color={colors.greyDark00}
          fill={colors.greyLight00}
        />
        {isDangol && <OwnerCouponDangolBadge />}
      </div>
      <div className={styles.centerWrapper}>
        <OwnerCouponItemNameText text={userName} />
        <div className={styles.subWrapper}>
          <OwnerCouponItemTotalText text={accumText} />
          <OwnerCouponItemSubText text={`${couponNum}번째 쿠폰 적립 중`} />
        </div>
        <button className={styles.reviewBtn} onClick={() => {}}>
          <OwnerCouponItemReviewText text='작성 리뷰' />
          <ArrowRightIcon width={16} height={16} stroke={colors.greyLight02} />
        </button>
      </div>
      <button className={styles.moreBtnWrapper} onClick={() => {}}>
        <MoreIcon width={24} height={24} fill={colors.black} />
      </button>
    </div>
  );
};

export default OwnerCouponItem;
