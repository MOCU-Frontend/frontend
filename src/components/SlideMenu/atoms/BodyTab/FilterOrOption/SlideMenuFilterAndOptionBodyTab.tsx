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
  handleClickResetOptionBtn?: (menuIndex: number) => void;
}

const SlideMenuFilterAndOptionBodyTab: React.FC<Props> = ({
  menuItemDataArr,
  handleCheckedDataIndex,
  handleClickMenuBodyItem,
  handleClickResetOptionBtn,
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
  }, [menuItemDataArr, tabRef, calculatedXLoc]);

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
              xDiff = moveEv.touches[0].clientX - startMouseXLoc;
              tabRef.current &&
                (tabRef.current.style.transform = `translate(${
                  calculatedXLoc + xDiff
                }px,0)`);
              console.log(calculatedXLoc);
            };
            document.addEventListener('touchmove', moveEventCallback);
            document.addEventListener('touchend', function upEventCallback() {
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
            xDiff = moveEv.clientX - startMouseXLoc;
            tabRef.current &&
              (tabRef.current.style.transform = `translate(${
                calculatedXLoc + xDiff
              }px,0)`);
          };
          document.addEventListener('mousemove', moveEventCallback);
          document.addEventListener('mouseup', function upEventCallback(upEv) {
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
                    onClickResetBtn={() =>
                      handleClickResetOptionBtn &&
                      handleClickResetOptionBtn(index)
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
