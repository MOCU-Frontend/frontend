import React from 'react';
import MyMainContentSubText from '../../Text/MainContentSub/MyMainContentSubText';
import MyMainNormalHeaderWrapper from '../../Wrapper/Main/NormalHeader/MyMainNormalHeaderWrapper';
import styles from './MyMissionContent.module.css';
import MapGageBar from '../../../../Map/atoms/GageBar/MapGageBar';
interface Props {
  onClick: () => void;
  accumStampNum: number;
  wholeStampNum: number;
}

const MyMissionContent: React.FC<Props> = ({
  onClick,
  accumStampNum,
  wholeStampNum,
}: Props) => {
  if (accumStampNum > wholeStampNum)
    throw new Error('accumStampNum is bigger than wholeStampNum!!');
  return (
    <MyMainNormalHeaderWrapper
      gap={17}
      headerText='미션 현황'
      onClick={onClick}
    >
      <MyMainContentSubText
        text={`미션맵 보상까지 ${
          wholeStampNum - accumStampNum
        }개의 스탬프가 남았습니다.`}
      />
      <div className={styles.gageBarWrapper}>
        <MapGageBar ratio={(accumStampNum / wholeStampNum) * 100} />
      </div>
    </MyMainNormalHeaderWrapper>
  );
};

export default MyMissionContent;
