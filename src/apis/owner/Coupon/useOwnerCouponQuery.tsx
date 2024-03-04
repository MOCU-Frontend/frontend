import { useQuery } from '@tanstack/react-query';
import { FilterListWithId, MenuItemData } from '../../../store/data/stamp';
import { fetchOwnerCouponData } from '../coupon';

export const useOwnerCouponQuery = (
  userId: string | undefined,
  optionDataArr: FilterListWithId[],
  selectedArrangeFilterItem: MenuItemData | undefined
) => {
  const ownerCouponQuery = useQuery({
    queryKey: ['OwnerCoupon'],
    queryFn: () =>
      fetchOwnerCouponData(
        userId || '',
        optionDataArr[0].isChecked,
        selectedArrangeFilterItem
          ? selectedArrangeFilterItem.title
          : '적립 높은 순'
      ),
  });
  return { ownerCouponQuery };
};
