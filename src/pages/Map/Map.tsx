import React, { useEffect, useRef, useState } from 'react';
import CheckFilter from '../../components/CheckFilter/CheckFilter';
import CheckFilterSelect from '../../components/CheckFilter/Select/CheckFilterSelect';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import MapHeaderSelect from '../../components/Map/atoms/Select/HeaderSelect/MapHeaderSelect';
import MapTargetBtn from '../../components/Map/atoms/TargetBtn/MapTargetBtn';
import { useLocation } from '../../hooks/useLocation';
import { useScript } from '../../hooks/useScript';
import locationImg from '../../assets/icon/location.svg';
import pinMapNormalImg from '../../assets/icon/pinMapNormal.svg';
import pinMapGiftImg from '../../assets/icon/pinMapGift.svg';
import pinMapFireImg from '../../assets/icon/pinMapFire.svg';
import styles from './Map.module.css';
import MapBottomSheet from '../../components/Map/atoms/BottomSheet/MapBottomSheet';

const BOTTOM_SHEET_HEIGHT = 371.78; // TODO: 바텀시트 height 재는 방법 생각해보기

type Location = {
  lat: number; // 위도
  lng: number; // 경도
};

type StoreData = {
  title: string;
  category: string;
  loc: { lat: number; lng: number };
  isFire: boolean;
  isChecked: boolean;
  isGift: boolean;
};

interface Props {}

const storeMapData: StoreData[] = [
  {
    title: '크림베이글 건대점1',
    category: '베이커리1',
    loc: { lat: 37.3595704, lng: 127.105399 },
    isFire: false,
    isChecked: false,
    isGift: false,
  },
  {
    title: '크림베이글 건대점2',
    category: '베이커리2',
    loc: { lat: 37.3696708, lng: 127.105405 },
    isFire: true,
    isChecked: false,
    isGift: false,
  },
  {
    title: '크림베이글 건대점3',
    category: '베이커리3',
    loc: { lat: 37.3696718, lng: 127.136404 },
    isFire: false,
    isChecked: false,
    isGift: true,
  },
];

const Map: React.FC<Props> = ({}: Props) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<naver.maps.Map | undefined>();
  const [isShowBottomSheet, setIsShowBottomSheet] = useState<boolean>(false);
  const [userLocMarker, setUserLocMarker] = useState<
    naver.maps.Marker | undefined
  >();
  const [storeMarkerArr, setStoreMarkerArr] = useState<naver.maps.Marker[]>([]);
  const [selectedStoreInform, setSelectedStoreInform] = useState<
    StoreData | undefined
  >();
  const { userLocation, error: userLocationError } = useLocation();
  const [loading, error] = useScript(
    `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`
  );

  const handleClickTargetBtn = () => {
    if (userLocation && map) {
      map.setCenter(new naver.maps.LatLng(userLocation.lat, userLocation.lng));
    } else {
      throw new Error('no userLocation or Map!!');
    }
  };

  const handleDragDownBottomSheet = () => {
    setIsShowBottomSheet(false);
    if (map) {
      mapWrapperRef.current &&
        (mapWrapperRef.current.style.height = `${window.innerHeight}px`);
      map.setSize(new naver.maps.Size(window.innerWidth, window.innerHeight));
    }
  };

  const handleShowBottomSheet = () => {
    setIsShowBottomSheet(true);
    mapWrapperRef.current &&
      (mapWrapperRef.current.style.height = `${
        window.innerHeight - BOTTOM_SHEET_HEIGHT
      }px`);
    if (map) {
      map.setSize(
        new naver.maps.Size(
          window.innerWidth,
          window.innerHeight - BOTTOM_SHEET_HEIGHT
        )
      );
    }
  };

  useEffect(() => {
    if (!error && !loading && mapContainerRef && mapContainerRef.current) {
      const defaultCenter: naver.maps.LatLng = new naver.maps.LatLng(
        37.3595704,
        127.105399
      );
      setMap(
        new naver.maps.Map(mapContainerRef.current, {
          center: defaultCenter,
          zoom: 16,
        })
      );
    }
  }, [error, loading]);

  useEffect(() => {
    if (userLocation && map) {
      // map.setCenter(new naver.maps.LatLng(userLocation.lat, userLocation.lng));
      if (!userLocMarker) {
        setUserLocMarker(
          new naver.maps.Marker({
            position: new naver.maps.LatLng(userLocation.lat, userLocation.lng),
            map: map,
            icon: locationImg,
          })
        );
      }
      storeMapData.forEach((storeData, index) => {
        const imgUrl = storeData.isFire
          ? pinMapFireImg
          : storeData.isGift
            ? pinMapGiftImg
            : pinMapNormalImg;
        const newMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(storeData.loc.lat, storeData.loc.lng),
          map: map,
          icon: imgUrl,
        });
        setStoreMarkerArr((prev) => [...prev, newMarker]);
        naver.maps.Event.addListener(newMarker, 'click', function (e) {
          console.log(storeData.title);
          setSelectedStoreInform(storeMapData[index]);
          handleShowBottomSheet();
        });
      });
    }
  }, [userLocation, map]);

  if (error) return <p>Error!</p>;
  if (loading) return <div className={styles.wrapper}>map loading..</div>;
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn
          headerPaddingSize='checkFilter'
          onClickBackBtn={() => {}}
          backBtnGap={11.5}
        >
          <MapHeaderSelect text='학교' />
        </HeaderBackBtn>
        <div className={styles.filtersWrapper}>
          <CheckFilterSelect
            border={1}
            borderColor='sub-purple-light'
            label='업종 전체'
            isChecked={false}
            onClick={() => {}}
          />
          <CheckFilter
            border={1}
            borderColor='sub-purple-light'
            label='이벤트 중'
            isChecked={false}
          />
          <CheckFilter label='쿠폰 사용 임박' isChecked={true} />
          <CheckFilter label='쿠폰 사용 임박' isChecked={true} />
        </div>
      </div>

      <div className={styles.mapWrapper} ref={mapWrapperRef}>
        <div className={styles.map} ref={mapContainerRef}></div>
        <div className={styles.targetBtnWrapper}>
          <MapTargetBtn onClick={handleClickTargetBtn} />
        </div>
      </div>
      {isShowBottomSheet && selectedStoreInform && (
        <MapBottomSheet
          onDragBottom={handleDragDownBottomSheet}
          storeInform={selectedStoreInform}
        />
      )}
    </div>
  );
};

export default Map;
