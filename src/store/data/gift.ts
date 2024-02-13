export type StoreData = {
  cafeTitle: string;
  foodTitle: string;
  foodPrice: number;
};

export type FilterList = {
  title: string;
  isChecked: boolean;
};

export const giftData: StoreData[] = [
  {
    cafeTitle: '크림베이글',
    foodTitle: '블루베리 크림 베이글',
    foodPrice: 6800,
  },
  {
    cafeTitle: '크림베이글',
    foodTitle: '크림 치즈 베이글',
    foodPrice: 4800,
  },
  {
    cafeTitle: '카페 안즈',
    foodTitle: '아이스 아메리카노',
    foodPrice: 2500,
  },
  {
    cafeTitle: '카페 안즈',
    foodTitle: '아인슈페너(ICE)',
    foodPrice: 6300,
  },
  {
    cafeTitle: '에이투비',
    foodTitle: '와플 파르페',
    foodPrice: 8000,
  },
  {
    cafeTitle: '에이투비',
    foodTitle: '초코 파르페',
    foodPrice: 8000,
  },
  {
    cafeTitle: '동네파스타',
    foodTitle: '크림파스타',
    foodPrice: 7000,
  },
  {
    cafeTitle: '동네파스타',
    foodTitle: '토마토파스타',
    foodPrice: 8000,
  },
];

export const initialDistanceFilterDataArr: FilterList[] = [
  {
    title: '~1km 반경',
    isChecked: true,
  },
  {
    title: '~5km 반경',
    isChecked: false,
  },
  {
    title: '~10km 반경',
    isChecked: false,
  },
];

export const initialCategoryFilterDataArr: FilterList[] = [
  {
    title: '식사',
    isChecked: true,
  },

  {
    title: '커피',
    isChecked: false,
  },
  {
    title: '디저트',
    isChecked: false,
  },
];

export const initialPriceFilterDataArr = [
  {
    title: '만원 미만',
    isChecked: true,
  },
  {
    title: '만원 이상 이만원 미만',
    isChecked: false,
  },
  {
    title: '이만원 이상',
    isChecked: false,
  },
];

export type MenuItemData = {
  title: string;
  isChecked: boolean;
  bodyType: 'filter' | 'option';
  bodyDataArr: FilterList[];
};

export const initialMenuItemDataArr: MenuItemData[] = [
  {
    title: '지역',
    isChecked: true,
    bodyType: 'filter',
    bodyDataArr: initialDistanceFilterDataArr,
  },
  {
    title: '카테고리',
    isChecked: false,
    bodyType: 'filter',
    bodyDataArr: initialCategoryFilterDataArr,
  },
  {
    title: '가격대',
    isChecked: false,
    bodyType: 'filter',
    bodyDataArr: initialPriceFilterDataArr,
  },
];
