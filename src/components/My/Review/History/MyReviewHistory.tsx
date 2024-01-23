import React, { useState } from 'react';
import styles from './MyReviewHistory.module.css';
import { ReactComponent as ProfileIcon } from '../../../../assets/icon/profile.svg';
import { ReactComponent as StarGageBarIcon } from '../../../../assets/icon/starGageBarRegular.svg';
import { ReactComponent as ArrowRightIcon } from '../../../../assets/icon/arrowRight.svg';
import { colors } from '../../../../styles/colors';
import StoreReviewNameText from '../../../Store/atoms/Text/ReviewName/StoreReviewNameText';
import StoreReviewTimeText from '../../../Store/atoms/Text/ReviewTime/StoreReviewTimeText';
import StoreReviewBodyText from '../../../Store/atoms/Text/ReviewBody/StoreReviewBodyText';
import StoreMoreBtnText from '../../../Store/atoms/Text/MoreBtn/StoreMoreBtnText';
interface Props {
  nameText: string;
  timeText: string;
  bodyText: string;
  bodyTextLengthLimit?: number;
}

const MyReviewHistory: React.FC<Props> = ({
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
            <button className={styles.titleWrapper}>
              <StoreReviewNameText text={nameText} />
              <ArrowRightIcon
                width={16}
                height={16}
                stroke={colors.greyLight02}
              />
            </button>

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

export default MyReviewHistory;
