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
import { createPortal } from 'react-dom';
import StoreReportModal from '../Modal/Report/StoreReportModal';
import ModalReportSuccess from '../../../Modal/ModalReportSuccess/ModalReportSuccess';
import StarGageBar from '../../../StarGageBar/StarGageBar';
interface Props {
  nameText: string;
  timeText: string;
  bodyText: string;
  bodyTextLengthLimit?: number;
}

type ReportLevel = 'reporting' | 'success' | undefined;

const StoreReview: React.FC<Props> = ({
  nameText,
  timeText,
  bodyText,
  bodyTextLengthLimit = 50,
}: Props) => {
  const [isShowFullBodyText, setIsShowFullBodyText] = useState(false);
  const [isReporting, setIsReporting] = useState(false);
  const [reportLevel, setReportLevel] = useState<ReportLevel>();
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
              <StarGageBar width={54} height={10} score={4.3} />
              <StoreReviewTimeText text={timeText} />
            </div>
          </div>
        </div>

        <button
          className={styles.reportBtnWrapper}
          onClick={() => setReportLevel('reporting')}
        >
          <StoreReportBtnText text='신고하기' />
        </button>
        {reportLevel === 'reporting' &&
          createPortal(
            <StoreReportModal
              onClickNo={() => setReportLevel(undefined)}
              onClickX={() => setReportLevel(undefined)}
              onClickYes={() => {
                setReportLevel('success');
                setTimeout(() => setReportLevel(undefined), 2000);
              }}
              reportedUserName='윤**'
            />,
            document.body
          )}

        {reportLevel === 'success' &&
          createPortal(
            <ModalReportSuccess
              bodyText='신고 접수 완료'
              subText1='신고해주셔서 감사합니다.'
              subText2='댓글은 검토 후 삭제 조치됩니다.'
            />,
            document.body
          )}
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
