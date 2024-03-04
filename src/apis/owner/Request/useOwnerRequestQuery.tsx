import { useQuery } from '@tanstack/react-query';
import { FilterListWithId, MenuItemData } from '../../../store/data/stamp';
import { fetchOwnerRequestData } from '../request';

export const useOwnerRequestQuery = (
  storeId: number | undefined,
  optionDataArr: FilterListWithId[],
  selectedArrangeFilterItem: MenuItemData | undefined
) => {
  const ownerRequestQuery = useQuery({
    queryKey: [
      'OwnerRequest',
      storeId || 0,
      optionDataArr[0].isChecked,
      selectedArrangeFilterItem
        ? selectedArrangeFilterItem.title === '보상 적립 전체'
        : true,
      selectedArrangeFilterItem
        ? selectedArrangeFilterItem.title === '보상 요청만'
        : false,
      selectedArrangeFilterItem
        ? selectedArrangeFilterItem.title === '적립 요청만'
        : false,
      0,
    ],
    queryFn: () =>
      fetchOwnerRequestData(
        storeId || 0,
        optionDataArr[0].isChecked,
        selectedArrangeFilterItem
          ? selectedArrangeFilterItem.title === '보상 적립 전체'
          : true,
        selectedArrangeFilterItem
          ? selectedArrangeFilterItem.title === '보상 요청만'
          : false,
        selectedArrangeFilterItem
          ? selectedArrangeFilterItem.title === '적립 요청만'
          : false,
        0
      ),
    enabled: !!storeId,
  });
  return { ownerRequestQuery };
};
