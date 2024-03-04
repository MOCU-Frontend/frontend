import React from 'react';
import styles from './StoreSearch.module.css';
import StoreSearchHeader from '../../../../../components/StoreSearch/atoms/StoreSearchHeader/StoreSearchHeader';
import StoreSearchKeyword from '../../../../../components/StoreSearch/atoms/StoreSearchKeyword/StoreSearchKeyword';
import StoreSearchImminentCoupon from '../../../../../components/StoreSearch/atoms/StoreSearchImminentCoupon/StoreSearchImminentCoupon';
import StoreSearchRecommend from '../../../../../components/StoreSearch/atoms/StoreSearchRecommend/StoreSearchRecommend';
import { useRecentSearchWord } from '../../../../../hooks/useRecentSearchWord';
import HomeAdSlideStatus from '../../../../../components/Home/atoms/SlideStatus/Ad/HomeAdSlideStatus';
import SlideMenuEventBodyTab from '../../../../../components/SlideMenu/atoms/BodyTab/Event/SlideMenuEventBodyTab';
import useStore from '../../../../../store/useStore';
import {
  EventItemData,
  eventItemDataArr,
} from '../../../../../store/data/advertisement';
import { useCarouselData } from '../../../../../hooks/useCarouselData';
import { useStoreSearchQuery } from '../../../../../apis/store/Search/useStoreSearchQuery';

const StoreSearch = () => {
  const userId = useStore((state) => state.userId);
  const nowUserLocation = useStore((state) => state.nowUserLocation);

  const {
    storeSearchDataQuery: { data: storeSearchData },
  } = useStoreSearchQuery(userId, nowUserLocation);

  const {
    searchKeywordDataArr,
    handleDeleteSearchKeyword,
    handleAddSearchKeyword,
  } = useRecentSearchWord();

  const { carouselItemArr: eventItemArr, handleCheckedDataIndex } =
    useCarouselData<EventItemData>(eventItemDataArr);

  return (
    <div className={styles.wrapper}>
      <StoreSearchHeader handleAddSearchKeyword={handleAddSearchKeyword} />
      <div className={styles.contentWrapper}>
        <StoreSearchKeyword
          searchKeywordDataArr={searchKeywordDataArr}
          handleDeleteSearchKeyword={handleDeleteSearchKeyword}
        />
        <div className={styles.bodyTabWrapper}>
          <SlideMenuEventBodyTab
            menuItemDataArr={eventItemArr}
            handleCheckedDataIndex={handleCheckedDataIndex}
          />
          <div className={styles.statusWrapper}>
            <HomeAdSlideStatus
              handleCheckedDataIndex={handleCheckedDataIndex}
              dataArr={eventItemArr}
            />
          </div>
        </div>
        <StoreSearchImminentCoupon
          dueDateStoreInfoList={storeSearchData?.result.dueDateStoreInfoList}
        />
        <StoreSearchRecommend
          recommendStoreInfoList={
            storeSearchData?.result.recommendStoreInfoList
          }
        />
      </div>
    </div>
  );
};

export { StoreSearch as Component };
