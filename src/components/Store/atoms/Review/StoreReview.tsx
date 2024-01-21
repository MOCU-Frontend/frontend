import React, { useState } from 'react';
import styles from './StoreReview.module.css';
import { ReactComponent as ProfileIcon } from '../../../../assets/icon/profile.svg';
import { ReactComponent as StarGageBarIcon } from '../../../../assets/icon/starGageBarRegular.svg';
import { colors } from '../../../../styles/colors';
import StoreReviewNameText from '../Text/ReviewName/StoreReviewNameText';
import StoreReviewTimeText from '../Text/ReviewTime/StoreReviewTimeText';
import StoreReportBtnText from '../Text/ReportBtn/StoreReportBtnText';
import StoreReviewBodyText from '../Text/ReviewBody/StoreReviewBodyText';
import StoreMoreBtnText from '../Text/MoreBtn/StoreMoreBtnText';
interface Props {
  nameText: string;
  timeText: string;
  bodyText: string;
  bodyTextLengthLimit?: number;
}

const StoreReview: React.FC<Props> = ({
  nameText,
  timeText,
  bodyText,
  bodyTextLengthLimit = 50,
}: Props) => {
  const [isShowFullBodyText, setIsShowFullBodyText] = useState(false);
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.topWrapper}>
        <div className={styles.profileWrapper}>
          <ProfileIcon
            width={48}
            height={48}
            color={colors.greyDark00}
            fill={colors.greyLight00}
          />
          <div className={styles.profileInformWrapper}>
            <StoreReviewNameText text={nameText} />
            <div className={styles.profileInformBottomWrapper}>
              <StarGageBarIcon
                width={54}
                height={10}
                fill={colors.pointYellow}
              />
              <StoreReviewTimeText text={timeText} />
            </div>
          </div>
        </div>

        <button className={styles.reportBtnWrapper}>
          <StoreReportBtnText text='신고하기' />
        </button>
      </div>
      <div>
        <StoreReviewBodyText
          text={
            bodyText.length > bodyTextLengthLimit
              ? isShowFullBodyText
                ? bodyText
                : bodyText.slice(0, bodyTextLengthLimit)
              : bodyText
          }
        />
        {bodyText.length > bodyTextLengthLimit && !isShowFullBodyText && (
          <button
            className={styles.moreBtnWrapper}
            onClick={() => setIsShowFullBodyText(true)}
          >
            <StoreMoreBtnText text='...더보기' />
          </button>
        )}
      </div>
    </div>
  );
};

export default StoreReview;
