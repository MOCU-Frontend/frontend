import { useQuery } from '@tanstack/react-query';
import { MenuItemData } from '../../../../store/data/stamp';
import { fetchMyReviewHistoryData } from '../history';

export const useMyReviewHistoryQuery = (
  userId: string | undefined,
  selectedArrangeFilterItem: MenuItemData | undefined
) => {
  const myReviewHistoryQuery = useQuery({
    queryKey: [
      'MyReviewwHistory',
      userId || '',
      selectedArrangeFilterItem ? selectedArrangeFilterItem.title : '최신순',
    ],
    queryFn: () =>
      fetchMyReviewHistoryData(
        userId || '',
        selectedArrangeFilterItem ? selectedArrangeFilterItem.title : '최신순'
      ),
    enabled: !!userId,
  });
  return { myReviewHistoryQuery };
};
