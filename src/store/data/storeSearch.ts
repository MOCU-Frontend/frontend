export type StoreSeachData = {
  id: number;
  title: string;
  couponCount: number;
  distance: number;
  eventOn?: boolean;
};

export type RecentSearchData = {
  title: string;
};

export const storeSearchData: StoreSeachData[] = [
  {
    id: 1,
    title: '로보카페',
    couponCount: 3,
    distance: 83,
    eventOn: false,
  },
  {
    id: 2,
    title: '크림베이글 건대점',
    couponCount: 7,
    distance: 105,
    eventOn: true,
  },
  {
    id: 3,
    title: '롯데리아 건대점',
    couponCount: 5,
    distance: 67,
    eventOn: true,
  },
  {
    id: 4,
    title: '가츠시',
    couponCount: 8,
    distance: 132,
    eventOn: false,
  },
];

export const storeRecentSearchData: RecentSearchData[] = [
  {
    title: '베이글',
  },
  {
    title: '스터디카페',
  },
  {
    title: '도넛',
  },
  {
    title: '대학로',
  },
  {
    title: '건대입구',
  },
];
