import React, { useState } from 'react';
import HeaderBackBtn from '../../../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './Store.module.css';
import { ReactComponent as ShareIcon } from '../../../../assets/icon/share.svg';
import { colors } from '../../../../styles/colors';
import StoreInfoContent from '../../../../components/Store/atoms/Contents/Info/StoreInfoContent';
import StoreStampContent from '../../../../components/Store/atoms/Contents/Stamp/StoreStampContent';
import StoreAccumBtn from '../../../../components/Store/atoms/Button/Accum/StoreAccumBtn';
import StoreScoreContent from '../../../../components/Store/atoms/Contents/Score/StoreScoreContent';
import StoreReviewContent from '../../../../components/Store/atoms/Contents/Review/StoreReviewContent';
import { useNavigate, useParams } from 'react-router-dom';
import FullBtn from '../../../../components/Button/FullBtn/FullBtn';
import storeImg from '../../../../assets/imgs/storeExample.png';
import { useQuery } from '@tanstack/react-query';
import { fetchStoreDetailData } from '../../../../apis/store/store';
import useStore from '../../../../store/useStore';
import { initialReviewHistoryMenuItemDataArr } from '../../../../store/data/searchResult';
import { MenuItemData } from '../../../../store/data/stamp';
import SlideTabViewFilter from '../../../../components/SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
import BottomSheet from '../../../../components/BottomSheet/BottomSheet';
import { useFilterMenu } from '../../../../hooks/useFilterMenu';
import { useStoreMutation } from '../../../../apis/store/mutations/useStoreMutation';
import { useStoreQuery } from '../../../../apis/store/useStoreQuery';

const Store: React.FC = () => {
  const navigate = useNavigate();
  const { storeId } = useParams();
  const userId = useStore((state) => state.userId);

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };

  const { menuItemDataArr, handleClickMenuBodyItem, handleClickMenuItem } =
    useFilterMenu(initialReviewHistoryMenuItemDataArr);

  const handleFilterSelectClick = (newIndex: number) => {
    const prevIndex = menuItemDataArr.findIndex((x) => x.isChecked);
    if (prevIndex === -1) throw new Error('no checked menu item!!');
    handleClickMenuItem(prevIndex, newIndex);
    setIsBottomSheetVisible(true);
  };

  const selectedArrangeFilterItem = menuItemDataArr[0].bodyDataArr.find(
    (x) => x.isChecked
  ) as MenuItemData | undefined;

  const {
    storeDetailDataQuery: { data: storeDetailData },
  } = useStoreQuery(userId, storeId, selectedArrangeFilterItem);
  const { reviewReportMutation } = useStoreMutation();
  const handleReportReview = (reviewId: number, onSuccess: () => void) => {
    reviewReportMutation.mutate({ reviewId }, { onSuccess });
  };
  const [isExistReview] = useState(false);
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn
          backBtnColor={colors.white}
          onClickBackBtn={() => navigate(-1)}
        >
          <div className={styles.shareBtnWrapper}>
            <button className={styles.shareBtn}>
              <ShareIcon width={24} height={24} fill={colors.white} />
            </button>
          </div>
        </HeaderBackBtn>
      </div>
      <img src={storeImg} alt='' className={styles.imgDummyBox} />
      <div className={styles.topContentBox}>
        <div className={styles.infoWrapper}>
          <StoreInfoContent
            title={storeDetailData && storeDetailData.storeName}
            category={storeDetailData && storeDetailData.category}
          />
        </div>
        <div className={styles.stampWrapper}>
          <StoreStampContent
            numOfStamp={storeDetailData && storeDetailData.numOfStamp}
            maxStamp={storeDetailData && storeDetailData.maxStamp}
            reward={storeDetailData && storeDetailData.reward}
          />
        </div>
        <div className={styles.accumBtnWrapper}>
          <StoreAccumBtn onClick={() => {}} />
        </div>
        <div className={styles.scoreWrapper}>
          <StoreScoreContent
            rating={storeDetailData && storeDetailData.rating}
          />
        </div>
        <StoreReviewContent
          reviews={storeDetailData && storeDetailData.reviews}
          handleReportReview={handleReportReview}
          filterLabel={selectedArrangeFilterItem?.title || '최신순'}
          onClickFilter={() => handleFilterSelectClick(0)}
        />
      </div>
      {isExistReview && (
        <div className={styles.fullBtnWrapper}>
          <FullBtn
            onClick={() => navigate('/review/11')}
            label='리뷰 작성 (1일 남음)'
          />
        </div>
      )}
      {isBottomSheetVisible && (
        <BottomSheet
          onDragBottom={handleDragBottom}
          onClickNotBottomSheet={handleDragBottom}
          children={
            <SlideTabViewFilter
              menuItemDataArr={menuItemDataArr}
              handleCheckedDataIndex={handleClickMenuItem}
              handleClickMenuBodyItem={handleClickMenuBodyItem}
              onClickCompleteBtn={handleDragBottom}
            />
          }
        ></BottomSheet>
      )}
    </div>
  );
};

export { Store as Component };
