import { useQuery } from '@tanstack/react-query';
import { MenuItemData } from '../../store/data/stamp';
import { fetchStoreDetailData } from './store';

export const useStoreQuery = (
  userId: string | undefined,
  storeId: string | undefined,
  selectedArrangeFilterItem: MenuItemData | undefined
) => {
  const storeDetailDataQuery = useQuery({
    queryKey: ['StoreDetailData', userId, storeId],
    queryFn: () =>
      fetchStoreDetailData(
        storeId ? parseInt(storeId) : 1,
        userId || '',
        selectedArrangeFilterItem
          ? selectedArrangeFilterItem.title === '최신순'
          : true,
        selectedArrangeFilterItem
          ? selectedArrangeFilterItem.title === '별점 높은 순'
          : false,
        0
      ),
    enabled: !!storeId && !!userId,
  });
  return { storeDetailDataQuery };
};
