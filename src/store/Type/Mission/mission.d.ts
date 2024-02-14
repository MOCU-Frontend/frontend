export type MissionResponse = {
  code: number;
  status: number;
  message: string;
  result: MissionData[];
};

export type MissionData = {
  todayMissionId: number;
  content: string;
  status: string;
};
