export type ReviewPostResponse = {
  code: number;
  status: number;
  message: string;
  result: {
    reviewId: number;
    todayMissionList: {
      content: string;
      todayMission: boolean;
    }[];
  };
  messages: string;
};

export type ReviewPatchResponse = {
  code: number;
  status: number;
  message: string;
  result: {
    todayMissionList: {
      content: string;
      todayMission: boolean;
    }[];
  };
  messages: string;
};

export type ReviewPostRequestData = {
  userId: number;
  storeId: number;
  rate: number;
  content: string;
};
export type ReviewPatchRequestData = {
  reviewId: number;
  userId: number;
  storeId: number;
  rate: number;
  content: string;
};
export type ReviewReportRequestData = {
  reviewId: number;
};
