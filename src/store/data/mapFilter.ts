type FilterList = {
  title: string;
  isChecked: boolean;
};

export type FilterListWithId = {
  title: string;
  isChecked: boolean;
  id: number;
};

export const initialSectorFilterDataArr: FilterList[] = [
  {
    title: '업종 전체',
    isChecked: true,
  },
  {
    title: '카페',
    isChecked: false,
  },
];

export type MenuItemData = {
  title: string;
  isChecked: boolean;
  bodyDataArr: FilterList[];
};

export const initialMenuItemDataArr: MenuItemData[] = [
  {
    title: '업종 전체',
    isChecked: true,
    bodyDataArr: initialSectorFilterDataArr,
  },
];
