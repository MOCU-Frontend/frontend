import { useQuery } from '@tanstack/react-query';
import { FilterList, FilterListWithId } from '../../store/data/stamp';
import { fetchStampData } from './stamp';

export const useStampQuery = (
  userId: string | undefined,
  selectedArrangeFilterItem: FilterList | undefined,
  selectedSectorFilterItem: FilterList | undefined,
  optionDataArr: FilterListWithId[]
) => {
  const storeStampDataQuery = useQuery({
    queryKey: [
      'StampData',
      userId || '',
      selectedSectorFilterItem ? selectedSectorFilterItem.title : '전체',
      selectedArrangeFilterItem ? selectedArrangeFilterItem.title : '거리순',
      optionDataArr[0].isChecked,
      optionDataArr[1].isChecked,
      optionDataArr[2].isChecked,
      optionDataArr[3].isChecked,
    ],
    queryFn: () =>
      fetchStampData(
        userId || '',
        selectedSectorFilterItem ? selectedSectorFilterItem.title : '전체',
        selectedArrangeFilterItem ? selectedArrangeFilterItem.title : '거리순',
        optionDataArr[0].isChecked,
        optionDataArr[1].isChecked,
        optionDataArr[2].isChecked,
        optionDataArr[3].isChecked
      ),
    enabled: !!userId,
  });
  return { storeStampDataQuery };
};
