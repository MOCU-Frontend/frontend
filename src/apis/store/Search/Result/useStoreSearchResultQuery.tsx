import { useQuery } from '@tanstack/react-query';
import { UserLocation } from '../../../../store/data/nowUserLocation';
import { FilterList, FilterListWithId } from '../../../../store/data/stamp';
import { fetchStoreSearchResultData } from '../../../storeSearchResult/fetchStoreSearchResultData';

export const useStoreSearchResultQuery = (
  userId: string | undefined,
  nowUserLocation: UserLocation | undefined,
  searchWord: string | undefined,
  selectedArrangeFilterItem: FilterList | undefined,
  selectedSectorFilterItem: FilterList | undefined,
  optionDataArr: FilterListWithId[]
) => {
  const storeSearchResultDataQuery = useQuery({
    queryKey: [
      'StoreSearchResultData',
      userId || '',
      nowUserLocation?.latitude || 37.5404257,
      nowUserLocation?.longitude || 127.07209,
      searchWord,
      selectedArrangeFilterItem,
      optionDataArr[2].isChecked,
      optionDataArr[3].isChecked,
      optionDataArr[1].isChecked,
      optionDataArr[0].isChecked,
      selectedSectorFilterItem,
    ],
    queryFn: () =>
      fetchStoreSearchResultData(
        userId || '',
        nowUserLocation?.latitude || 37.5404257,
        nowUserLocation?.longitude || 127.07209,
        searchWord,
        selectedArrangeFilterItem ? selectedArrangeFilterItem.title : '거리순',
        optionDataArr[2].isChecked,
        optionDataArr[3].isChecked,
        optionDataArr[1].isChecked,
        optionDataArr[0].isChecked,
        0,
        selectedSectorFilterItem ? selectedSectorFilterItem.title : '전체'
      ),
    enabled: !!userId && !!nowUserLocation,
  });
  return { storeSearchResultDataQuery };
};
