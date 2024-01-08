import React from 'react';
import MapStoreImg from '../../Img/StoreImg/MapStoreImg';
import MapContentWrapper from '../../Wrapper/ContentWrapper/MapContentWrapper';
import styles from './MapLeftContent.module.css';
import { ReactComponent as StarGageBar } from '../../../../../assets/icon/starGageBarRegular.svg';
import { colors } from '../../../../../styles/colors';
import MapInformText from '../../Text/InformText/MapInformText';
import MapUnderLineButton from '../../Button/UnderLineButton/MapUnderLineButton';

interface Props {
  imgUrl: string;
  score: number;
  onClickReviewBtn: () => void;
}

const MapLeftContent: React.FC<Props> = ({
  imgUrl,
  score,
  onClickReviewBtn,
}: Props) => {
  return (
    <MapContentWrapper>
      <div className={styles.leftContentWrapper}>
        <MapStoreImg src={imgUrl} alt='storeImg' />
        <div className={styles.scoreWrapper}>
          <StarGageBar width={54} height={10} fill={colors.pointYellow} />
          <MapInformText text={`${score}.0`} />
        </div>
        <MapUnderLineButton label='리뷰보기' onClick={onClickReviewBtn} />
      </div>
    </MapContentWrapper>
  );
};

export default MapLeftContent;
