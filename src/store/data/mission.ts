export type MissionTitle = {
  title: string;
};

export type MissionCnt = {
  /*
   *
   * 오늘의 미션 성공 횟수
   */
  todayMissionCnt: number;

  /*
   *
   * 슽탬프 누적 횟수
   */
  stampCnt: number;
};

export const MissionTitleData: MissionTitle[] = [
  {
    title: '내 주변 쿠폰 찾아보기',
  },
  {
    title: '쿠폰 사용하기',
  },
  {
    title: '친구에게 선물하기',
  },
  {
    title: '리뷰 남기기',
  },
  {
    title: '이벤트 중인 가게 방문하기',
  },
];

export const MissionCntData: MissionCnt[] = [
  {
    todayMissionCnt: 4,
    stampCnt: 5,
  },
];
