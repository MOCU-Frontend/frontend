import React from 'react';
import styles from './StoreSearch.module.css';
import { useQuery } from '@tanstack/react-query';

import StoreSearchHeader from '../../../../../components/StoreSearch/atoms/StoreSearchHeader/StoreSearchHeader';
import StoreSearchKeyword from '../../../../../components/StoreSearch/atoms/StoreSearchKeyword/StoreSearchKeyword';
import StoreSearchImminentCoupon from '../../../../../components/StoreSearch/atoms/StoreSearchImminentCoupon/StoreSearchImminentCoupon';
import StoreSearchRecommend from '../../../../../components/StoreSearch/atoms/StoreSearchRecommend/StoreSearchRecommend';
import { useRecentSearchWord } from '../../../../../hooks/useRecentSearchWord';
import HomeAdSlideStatus from '../../../../../components/Home/atoms/SlideStatus/Ad/HomeAdSlideStatus';
import SlideMenuEventBodyTab from '../../../../../components/SlideMenu/atoms/BodyTab/Event/SlideMenuEventBodyTab';
import { fetchStoreSearchData } from '../../../../../apis/storeSearch/fetchStoreSearchData';
import useStore from '../../../../../store/useStore';
import {
  EventItemData,
  eventItemDataArr,
} from '../../../../../store/data/advertisement';
import { useCarouselData } from '../../../../../hooks/useCarouselData';

const StoreSearch = () => {
  const userId = useStore((state) => state.userId);
  const { data: storeSearchData } = useQuery({
    queryKey: ['storeSearchData'],
    queryFn: () => fetchStoreSearchData(userId || '', 1, 1),
    enabled: !!userId,
  });

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
