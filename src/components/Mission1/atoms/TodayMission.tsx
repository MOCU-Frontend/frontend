import React from 'react';
import styles from './TodayMission.module.css';
import Button from '../../Button/Button';
import { missionBtnResponse } from '../../../store/Type/Mission/missionBtnResponse';
import { useNavigate } from 'react-router-dom';

interface Props {
  content: string;
  status: string;
  missionCompleteClick: () => void;
  patchData: missionBtnResponse | undefined;
}

const TodayMission: React.FC<Props> = ({
  content,
  status,
  missionCompleteClick,
  patchData,
}: Props) => {
  const navigate = useNavigate();

  const missionStartClick = () => {
    if (content === '리뷰 남기기') {
    } else if (content === '쿠폰 사용하기') {
      // 쿠폰 페이지로 이동
      navigate('/coupon');
    } else if (content === '이벤트 중인 가게에서 적립하기') {
      // 지도 페이지로 이동
      navigate('/map');
    } else if (content === '단골 맺기') {
      // 단골 맺기 가능한 가게리스트로 이동
      navigate('/store/dangol/add');
    } else if (content === '쿠폰 사용 임박 가게 방문 후 스탬프 적립하기') {
      // 가게 검색 페이지로 이동
      navigate('/storesearch');
    } else if (content === '단골가게에서 적립하기') {
      // 단골 페이지로 이동
      navigate('/store/dangol');
    }

    // 미구현
    // else if(content === '내 주변 혜택 찾아보기') {
    //   // 지도 페이지로 이동
    //   navigate('/map')
    // }
    // else if(content === '이벤트 중인 가게 방문하기') {
    // }
  };

  // const isButtonDisabled =
  //   patchData?.result.content === '이미 2개의 버튼을 완료하였습니다';
  // const buttonLabel = isButtonDisabled ? '미션 완료하기' : '미션 수행 완료';

  return (
    <div className={styles.wrapper}>
      <div className={styles.todayMissionText}>{content}</div>
      {status === 'done' && (
        <Button
          label="미션 완료하기"
          size="small"
          borderRadius="large"
          // disabled={isButtonDisabled}
          disabledBackgroundColor="sub-purple-light"
          onClick={missionCompleteClick}
        />
      )}

      {status === 'not-done' && (
        <Button
          label="미션 수행하기"
          size="small"
          borderRadius="large"
          disabledBackgroundColor="sub-purple-light"
          onClick={missionStartClick}
        />
      )}

      {status === 'stamped' && (
        <Button
          label="미션 수행 완료"
          size="small"
          borderRadius="large"
          disabled={true}
          disabledBackgroundColor="sub-purple-light"
        />
      )}
    </div>
  );
};

export default TodayMission;
