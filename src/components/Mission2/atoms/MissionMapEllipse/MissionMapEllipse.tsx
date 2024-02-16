import React from 'react';
import { ReactComponent as EllipseHorizonImage } from '../../../../assets/icon/mapEllipseHorizon.svg';
import { ReactComponent as EllipseRightUImage } from '../../../../assets/icon/mapEllipseRightU.svg';
import { ReactComponent as EllipseLeftUImage } from '../../../../assets/icon/mapEllipseLeftU.svg';
import { colors } from '../../../../styles/colors';

interface Props {
  /**
   * 스탬프 개수
   */
  stampCnt: number | undefined;

  /**
   * 기준 숫자
   */
  standardNumber: number | undefined;

  /**
   * ellipse 유형
   */
  ellipseType: number;
}

const MissionMapEllipse: React.FC<Props> = ({
  stampCnt,
  standardNumber,
  ellipseType,
}) => {
  let EllipseImage;
  switch (ellipseType) {
    case 1:
      EllipseImage = EllipseLeftUImage;
      break;
    case 2:
      EllipseImage = EllipseHorizonImage;
      break;
    case 3:
      EllipseImage = EllipseRightUImage;
      break;
    default:
      EllipseImage = EllipseHorizonImage;
  }

  return (
    <>
      {stampCnt && standardNumber && stampCnt >= standardNumber ? (
        <EllipseImage stroke={colors.mainPurple} />
      ) : (
        <EllipseImage stroke={colors.white} />
      )}
    </>
  );
};

export default MissionMapEllipse;
