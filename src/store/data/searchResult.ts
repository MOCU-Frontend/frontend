export type StoreData = {
  title: string;
  couponCount: number;
  achieve: string;
  distance: number;
};

export const searchResultData: StoreData[] = [
  {
    title: '크림베이글 건대점',
    couponCount: 9,
    achieve: '아이스 아메리카노',
    distance: 150,
  },
  {
    title: '카페 안즈',
    couponCount: 9,
    achieve: '아이스 아메리카노',
    distance: 150,
  },
  {
    title: '에이투비',
    couponCount: 10,
    achieve: '크로플',
    distance: 150,
  },
  {
    title: '브런치카페',
    couponCount: 10,
    achieve: '샌드위치',
    distance: 150,
  },
  {
    title: '카페 아르무아',
    couponCount: 0,
    achieve: '아메리카노',
    distance: 150,
  },
  {
    title: '카페 아르무아',
    couponCount: 0,
    achieve: '아메리카노',
    distance: 150,
  },
  {
    title: '카페 아르무아',
    couponCount: 0,
    achieve: '아메리카노',
    distance: 150,
  },
  {
    title: '카페 아르무아',
    couponCount: 0,
    achieve: '아메리카노',
    distance: 150,
  },
  {
    title: '카페 아르무아',
    couponCount: 0,
    achieve: '아메리카노',
    distance: 150,
  },
];

type FilterList = {
  title: string;
  isChecked: boolean;
};
export type FilterListWithId = {
  title: string;
  isChecked: boolean;
  id: number;
};

export const initialArrangementFilterDataArr: FilterList[] = [
  {
    title: '거리순',
    isChecked: true,
  },
  {
    title: '적립률순',
    isChecked: false,
  },
  {
    title: '별점 높은순',
    isChecked: false,
  },
  {
    title: '리뷰 많은순',
    isChecked: false,
  },
];

export const initialDangolArrangementFilterDataArr: FilterList[] = [
  {
    title: '최신순',
    isChecked: true,
  },
  {
    title: '적립 많은 순',
    isChecked: false,
  },
  {
    title: '별점 높은 순',
    isChecked: false,
  },
  {
    title: '거리순',
    isChecked: false,
  },
];

export const initialStampArrangementFilterDataArr: FilterList[] = [
  {
    title: '최신순',
    isChecked: true,
  },
  {
    title: '적립 많은 순',
    isChecked: false,
  },
  {
    title: '별점 높은 순',
    isChecked: false,
  },
  {
    title: '거리순',
    isChecked: false,
  },
];

export const initialReviewHistoryArrangementFilterDataArr: FilterList[] = [
  {
    title: '최신순',
    isChecked: true,
  },
  {
    title: '별점 높은 순',
    isChecked: false,
  },
];

export const initialOwnerCouponArrangementFilterDataArr: FilterList[] = [
  {
    title: '적립 높은 순',
    isChecked: true,
  },
  {
    title: '쿠폰 사용 많은 순',
    isChecked: false,
  },
  {
    title: '최근 방문 순',
    isChecked: false,
  },
];

export const initialSectorFilterDataArr: FilterList[] = [
  {
    title: '전체',
    isChecked: true,
  },
  {
    title: '음식점',
    isChecked: false,
  },
  {
    title: '카페',
    isChecked: false,
  },
  {
    title: '베이커리',
    isChecked: false,
  },
  {
    title: '주류',
    isChecked: false,
  },
  {
    title: '기타',
    isChecked: false,
  },
];

export const initialOwnerRequestFilterDataArr: FilterList[] = [
  {
    title: '보상 적립 전체',
    isChecked: true,
  },
  {
    title: '보상 요청만',
    isChecked: false,
  },
  {
    title: '적립 요청만',
    isChecked: false,
  },
];

export const initialOptionDataArr = [
  {
    title: '이벤트 중',
    isChecked: false,
    id: 1,
  },
  {
    title: '쿠폰 사용 임박',
    isChecked: false,
    id: 2,
  },
  {
    title: '적립 진행 중만',
    isChecked: false,
    id: 3,
  },
  {
    title: '안 가본 곳만',
    isChecked: false,
    id: 4,
  },
  {
    title: '기타 옵션',
    isChecked: false,
    id: 5,
  },
];
export const ownerCouponInitialOptionDataArr = [
  {
    title: '단골만',
    isChecked: false,
    id: 1,
  },
];
export const ownerRequestInitialOptionDataArr = [
  {
    title: '수락 안 한 요청만',
    isChecked: false,
    id: 1,
  },
];

export const stampInitialOptionDataArr = [
  {
    title: '이벤트',
    isChecked: false,
    id: 1,
  },
  {
    title: '사용 가능 쿠폰만',
    isChecked: false,
    id: 2,
  },
  {
    title: '단골만',
    isChecked: false,
    id: 3,
  },
  {
    title: '쿠폰 사용 임박',
    isChecked: false,
    id: 4,
  },
];

export const mapInitialOptionDataArr = [
  {
    title: '이벤트 중',
    isChecked: false,
    id: 1,
  },
  {
    title: '쿠폰 사용 임박',
    isChecked: false,
    id: 2,
  },
  {
    title: '가본 곳만',
    isChecked: false,
    id: 3,
  },
];

export const storeDangolinitialOptionDataArr = [
  {
    title: '이벤트',
    isChecked: false,
    id: 1,
  },
  {
    title: '사용 가능 쿠폰만',
    isChecked: false,
    id: 2,
  },
];

export type MenuItemData = {
  title: string;
  isChecked: boolean;
  bodyDataArr: FilterList[];
};

export const initialMenuItemDataArr: MenuItemData[] = [
  {
    title: '정렬',
    isChecked: true,
    bodyDataArr: initialArrangementFilterDataArr,
  },
  {
    title: '업종',
    isChecked: false,
    bodyDataArr: initialSectorFilterDataArr,
  },
];
export const initialDangolMenuItemDataArr: MenuItemData[] = [
  {
    title: '정렬',
    isChecked: true,
    bodyDataArr: initialDangolArrangementFilterDataArr,
  },
  {
    title: '업종',
    isChecked: false,
    bodyDataArr: initialSectorFilterDataArr,
  },
];

export const initialStampMenuItemDataArr: MenuItemData[] = [
  {
    title: '정렬',
    isChecked: true,
    bodyDataArr: initialStampArrangementFilterDataArr,
  },
  {
    title: '업종',
    isChecked: false,
    bodyDataArr: initialSectorFilterDataArr,
  },
];
export const initialReviewHistoryMenuItemDataArr: MenuItemData[] = [
  {
    title: '정렬',
    isChecked: true,
    bodyDataArr: initialReviewHistoryArrangementFilterDataArr,
  },
];

export const initialOwnerCouponMenuItemDataArr: MenuItemData[] = [
  {
    title: '정렬',
    isChecked: true,
    bodyDataArr: initialOwnerCouponArrangementFilterDataArr,
  },
];

export const initialOwnerRequestMenuItemDataArr: MenuItemData[] = [
  {
    title: '보상 적립 전체',
    isChecked: true,
    bodyDataArr: initialOwnerRequestFilterDataArr,
  },
];
