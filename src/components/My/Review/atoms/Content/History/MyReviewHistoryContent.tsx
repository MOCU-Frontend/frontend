import React, { useState } from 'react';
import CheckFilterSelect from '../../../../../CheckFilter/Select/CheckFilterSelect';
import MyReviewHistorySubText from '../../Text/HistorySub/MyReviewHistorySubText';
import MyReivewHistoryTitleText from '../../Text/HistoryTitle/MyReivewHistoryTitleText';
import styles from './MyReviewHistoryContent.module.css';
import { ReactComponent as InformIcon } from '../../../../../../assets/icon/information.svg';
import { colors } from '../../../../../../styles/colors';
import MyReviewHistory from '../../../History/MyReviewHistory';
import { useQuery } from '@tanstack/react-query';
import { fetchMyReviewHistoryData } from '../../../../../../apis/my/review/history';
import useStore from '../../../../../../store/useStore';
import BottomSheet from '../../../../../BottomSheet/BottomSheet';
import SlideTabViewFilter from '../../../../../SlideMenu/SlideTabView/Filter/SlideTabViewFilter';
import { MenuItemData } from '../../../../../../store/data/stamp';
import { initialReviewHistoryMenuItemDataArr } from '../../../../../../store/data/searchResult';
import { useFilterMenu } from '../../../../../../hooks/useFilterMenu';

const MyReviewHistoryContent = () => {
  const userId = useStore((state) => state.userId);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const { data: myReviewwHistoryData } = useQuery({
    queryKey: ['MyReviewwHistory'],
    queryFn: () =>
      fetchMyReviewHistoryData(
        userId || '',
        selectedArrangeFilterItem ? selectedArrangeFilterItem.title : '최신순'
      ),
    enabled: !!userId,
  });
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

  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.titleWrapper}>
        <MyReivewHistoryTitleText text={`내가 쓴 리뷰${14}개`} />
        <div className={styles.informWrapper}>
          <InformIcon width={14} height={14} fill={colors.greyDark00} />
          <MyReviewHistorySubText text='리뷰 수정 안내' />
        </div>
      </div>
      <div className={styles.filterWrapper}>
        <CheckFilterSelect
          label={selectedArrangeFilterItem?.title || '최신순'}
          onClick={() => handleFilterSelectClick(0)}
          isChecked={false}
        />
      </div>
      <div className={styles.reviewsWrapper}>
        {myReviewwHistoryData &&
          myReviewwHistoryData.map((data, index) => (
            <MyReviewHistory
              key={data.storeName + index}
              nameText={data.storeName}
              rate={data.rate}
              timeText={data.createdDate}
              bodyText={data.content}
              bodyTextLengthLimit={60}
            />
          ))}
      </div>
      {isBottomSheetVisible && (
        <BottomSheet
          onDragBottom={handleDragBottom}
          onClickNotBottomSheet={handleDragBottom}
          children={
            <SlideTabViewFilter
              menuItemDataArr={menuItemDataArr}
              handleCheckedDataIndex={handleClickMenuItem}
              handleClickMenuBodyItem={handleClickMenuBodyItem}
              // handleClickResetOptionBtn={handleClickResetOptionBtn}
              onClickCompleteBtn={handleDragBottom}
            />
          }
        ></BottomSheet>
      )}
    </div>
  );
};

export default MyReviewHistoryContent;
