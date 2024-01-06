import React, { useEffect, useRef } from 'react';
import BodyTabWrapper from '../BodyTabWrapper/BodyTabWrapper';
import styles from './SlideMenuBodyTab.module.css';
type BodyTabDataType = {
  title: string;
  isChecked: boolean;
  content: React.JSX.Element;
};

interface Props {
  tabDataArr: BodyTabDataType[];
  handleCheckedDataIndex: (prevIndex: number, newIndex: number) => void;
}

const SlideMenuBodyTab: React.FC<Props> = ({
  tabDataArr,
  handleCheckedDataIndex,
}: Props) => {
  const tabRef = useRef<HTMLDivElement>(null);

  const checkedDataIndex = tabDataArr.findIndex((x) => x.isChecked);

  if (checkedDataIndex === -1) throw new Error('no checked menu data!');
  const calculatedXLoc = window.innerWidth * (checkedDataIndex + 1) * -1;
  const tabStyle = {
    transform: `translate(${calculatedXLoc}px,0)`,
  };

  useEffect(() => {
    tabRef.current &&
      (tabRef.current.style.transform = `translate(${calculatedXLoc}px,0)`);
  }, [tabDataArr, tabRef.current]);

  if (tabDataArr.length === 0) {
    return <div>no data</div>;
  }
  return (
    <div className={styles.wholeWrapper}>
      <div
        style={tabStyle}
        ref={tabRef}
        className={styles.tabWrapper}
        onMouseDown={(e) => {
          const startMouseXLoc = e.clientX;
          let xDiff = 0;
          tabRef.current && (tabRef.current.style.transition = 'none');
          const moveEventCallback = (moveEv: MouseEvent) => {
            // 다음페이지가 없다면 => xDiff > 0 => 흰화면 나오게
            // 이전 페이지도 마찬가지
            xDiff = moveEv.clientX - startMouseXLoc;
            tabRef.current &&
              (tabRef.current.style.transform = `translate(${
                calculatedXLoc + xDiff
              }px,0)`);
            console.log(xDiff);
          };
          document.addEventListener('mousemove', moveEventCallback);
          document.addEventListener('mouseup', function upEventCallback(upEv) {
            // xDiff>0 => 다음페이지 존재X => 현재페이지로 돌아오기 (애니메이션 주면서 원래자리로)
            // xDiff>0 => 다음페이지 존재 => xDiff > 요소 너비의 절반 => 다음페이지로 넘어가기 (애니메이션 주면서 전환)
            // xDiff>0 => 다음페이지 존재 => xDiff < 요소 너비의 절반 => 현재페이지로 돌아오기 (애니메이션 주면서 원래자리로)
            // xDiff<0 => 이전페이지 존재X => 현재페이지로 돌아오기 (애니메이션 주면서 원래자리로)
            // xDiff<0 => 이전페이지 존재 => xDiff < (요소 너비의 절반*-1) => 이전페이지로 넘어가기 (애니메이션 주면서 전환)
            // xDiff<0 => 이전페이지 존재 => xDiff > (요소 너비의 절반*-1) => 현재페이지로 돌아오기 (애니메이션 주면서 원래자리로)
            //mouseup 되면 그냥 checked 변경사항 있으면 변경해주고 => 그 checked에 맞게 위치 바꿔주면 됨 (애니메이션주며)
            tabRef.current &&
              (tabRef.current.style.transition = 'all 0.5s ease-in');
            if (xDiff > 0) {
              if (checkedDataIndex !== 0 && xDiff > window.innerWidth / 2) {
                handleCheckedDataIndex(checkedDataIndex, checkedDataIndex - 1);
              } else {
                handleCheckedDataIndex(checkedDataIndex, checkedDataIndex);
              }
            } else {
              if (
                checkedDataIndex + 1 !== tabDataArr.length &&
                xDiff * -1 > window.innerWidth / 2
              ) {
                handleCheckedDataIndex(checkedDataIndex, checkedDataIndex + 1);
              } else {
                handleCheckedDataIndex(checkedDataIndex, checkedDataIndex);
              }
            }
            document.removeEventListener('mousemove', moveEventCallback);
            document.removeEventListener('mouseup', upEventCallback);
          });
        }}
      >
        {
          <>
            <BodyTabWrapper>
              <></>
            </BodyTabWrapper>
            {tabDataArr.map((data) => (
              <BodyTabWrapper key={data.title}>{data.content}</BodyTabWrapper>
            ))}
            <BodyTabWrapper>
              <></>
            </BodyTabWrapper>
          </>
        }
      </div>
    </div>
  );
};

export default SlideMenuBodyTab;
