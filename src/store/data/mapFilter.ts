type FilterList = {
  title: string;
  isChecked: boolean;
};

export type FilterListWithId = {
  title: string;
  isChecked: boolean;
  id: number;
};

export const initialSectorFilterDataArr: FilterListWithId[] = [
  {
    title: '업종 전체',
    isChecked: true,
    id: 0,
  },

  {
    title: '음식점',
    isChecked: false,
    id: 1,
  },
  {
    title: '카페',
    isChecked: false,
    id: 2,
  },
  {
    title: '베이커리',
    isChecked: false,
    id: 3,
  },
  {
    title: '주류',
    isChecked: false,
    id: 4,
  },
  {
    title: '기타',
    isChecked: false,
    id: 5,
  },
];

export type MenuItemData = {
  title: string;
  isChecked: boolean;
  bodyDataArr: FilterListWithId[];
};

export const initialMenuItemDataArr: MenuItemData[] = [
  {
    title: '업종 전체',
    isChecked: true,
    bodyDataArr: initialSectorFilterDataArr,
  },
];
