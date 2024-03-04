import { useQuery } from '@tanstack/react-query';
import { UserLocation } from '../../../store/data/nowUserLocation';
import { FilterList, FilterListWithId } from '../../../store/data/stamp';
import { fetchDangolData } from '../../dangol/dangol';

export const useStoreDangolQuery = (
  userId: string | undefined,
  nowUserLocation: UserLocation | undefined,
  selectedArrangeFilterItem: FilterList | undefined,
  selectedSectorFilterItem: FilterList | undefined,
  optionDataArr: FilterListWithId[]
) => {
  const storeDangolDataQuery = useQuery({
    queryKey: [
      'Dangol',
      userId || '',
      selectedArrangeFilterItem ? selectedArrangeFilterItem.title : '최신순',
      selectedSectorFilterItem ? selectedSectorFilterItem.title : '전체',
      optionDataArr[0].isChecked,
      optionDataArr[1].isChecked,
      nowUserLocation?.latitude || 37.5404257,
      nowUserLocation?.longitude || 127.07209,
      0,
    ],
    queryFn: () =>
      fetchDangolData(
        userId || '',
        selectedArrangeFilterItem ? selectedArrangeFilterItem.title : '최신순',
        selectedSectorFilterItem ? selectedSectorFilterItem.title : '전체',
        optionDataArr[0].isChecked,
        optionDataArr[1].isChecked,
        nowUserLocation?.latitude || 37.5404257,
        nowUserLocation?.longitude || 127.07209,
        0
      ),
    enabled: !!userId && !!nowUserLocation && optionDataArr.length > 0,
  });
  return { storeDangolDataQuery };
};
