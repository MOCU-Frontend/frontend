import React, { useEffect, useRef } from 'react';
import BtmSheetFilter from '../../../../SearchResult/atoms/BtmSheetFilter/BtmSheetFilter';
import BtmSheetOption from '../../../../SearchResult/atoms/BtmSheetOption/BtmSheetOption';
import BodyTabWrapper from '../../BodyTabWrapper/BodyTabWrapper';
import styles from '../SlideMenuBodyTab.module.css';

type FilterList = {
  title: string;
  isChecked: boolean;
};

type MenuItemData = {
  title: string;
  isChecked: boolean;
  bodyType: 'filter' | 'option';
  bodyDataArr: FilterList[];
};

interface Props {
  menuItemDataArr: MenuItemData[];
  handleCheckedDataIndex: (prevIndex: number, newIndex: number) => void;
  handleClickMenuBodyItem: (
    menuIndex: number,
    newIndex: number,
    prevIndex?: number
  ) => void;
}

const SlideMenuFilterAndOptionBodyTab: React.FC<Props> = ({
  menuItemDataArr,
  handleCheckedDataIndex,
  handleClickMenuBodyItem,
}: Props) => {
  const tabRef = useRef<HTMLDivElement>(null);

  const checkedDataIndex = menuItemDataArr.findIndex((x) => x.isChecked);

  if (checkedDataIndex === -1) throw new Error('no checked menu data!');
  const calculatedXLoc = window.innerWidth * (checkedDataIndex + 1) * -1;
  const tabStyle = {
    transform: `translate(${calculatedXLoc}px,0)`,
    transition: 'all 0.5s ease-in',
  };

  useEffect(() => {
    tabRef.current &&
      (tabRef.current.style.transform = `translate(${calculatedXLoc}px,0)`);
  }, [menuItemDataArr, tabRef.current]);

  if (menuItemDataArr.length === 0) {
    return <div>no data</div>;
  }
  return (
    <div className={styles.wholeWrapper}>
      <div
        style={tabStyle}
        ref={tabRef}
        className={styles.tabWrapper}
        onTouchStart={(e) => {
          if (e.touches && e.touches[0]) {
            const startMouseXLoc = e.touches[0].clientX;
            let xDiff = 0;
            tabRef.current && (tabRef.current.style.transition = 'none');
            const moveEventCallback = (moveEv: TouchEvent) => {
              // 다음페이지가 없다면 => xDiff > 0 => 흰화면 나오게
              // 이전 페이지도 마찬가지
              xDiff = moveEv.touches[0].clientX - startMouseXLoc;
              tabRef.current &&
                (tabRef.current.style.transform = `translate(${
                  calculatedXLoc + xDiff
                }px,0)`);
              console.log(calculatedXLoc);
            };
            document.addEventListener('touchmove', moveEventCallback);
            document.addEventListener('touchend', function upEventCallback() {
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
                  handleCheckedDataIndex(
                    checkedDataIndex,
                    checkedDataIndex - 1
                  );
                } else {
                  handleCheckedDataIndex(checkedDataIndex, checkedDataIndex);
                }
              } else {
                if (
                  checkedDataIndex + 1 !== menuItemDataArr.length &&
                  xDiff * -1 > window.innerWidth / 2
                ) {
                  handleCheckedDataIndex(
                    checkedDataIndex,
                    checkedDataIndex + 1
                  );
                } else {
                  handleCheckedDataIndex(checkedDataIndex, checkedDataIndex);
                }
              }
              document.removeEventListener('touchmove', moveEventCallback);
              document.removeEventListener('touchend', upEventCallback);
            });
          }
        }}
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
                checkedDataIndex + 1 !== menuItemDataArr.length &&
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
            {menuItemDataArr.map((data, index) => (
              <BodyTabWrapper key={data.title}>
                {data.bodyType === 'filter' ? (
                  <BtmSheetFilter
                    filterArray={data.bodyDataArr}
                    onClick={(prevIndex: number, newIndex: number) =>
                      handleClickMenuBodyItem(index, newIndex, prevIndex)
                    }
                  />
                ) : (
                  <BtmSheetOption
                    OptionDataArray={data.bodyDataArr}
                    onClick={(newIndex: number) =>
                      handleClickMenuBodyItem(index, newIndex)
                    }
                  />
                )}
              </BodyTabWrapper>
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

export default SlideMenuFilterAndOptionBodyTab;
