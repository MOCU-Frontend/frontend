import React, { useEffect, useRef } from 'react';
import BodyTabWrapper from '../../BodyTabWrapper/BodyTabWrapper';
import BodyTabWrapperNoPadding from '../../BodyTabWrapper/NoPadding/BodyTabWrapperNoPadding';
import styles from './SlideMenuAdBodyTab.module.css';

type MenuItemData = {
  adId: number;
  isChecked: boolean;
};

interface Props {
  menuItemDataArr: MenuItemData[];
  handleCheckedDataIndex: (prevIndex: number, newIndex: number) => void;
}

const SlideMenuAdBodyTab: React.FC<Props> = ({
  menuItemDataArr,
  handleCheckedDataIndex,
}: Props) => {
  const tabRef = useRef<HTMLDivElement>(null);

  const checkedDataIndex = menuItemDataArr.findIndex((x) => x.isChecked);

  if (checkedDataIndex === -1) throw new Error('no checked menu data!');
  const calculatedXLoc = (window.innerWidth - 40) * (checkedDataIndex + 1) * -1;

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
            };
            document.addEventListener('touchmove', moveEventCallback);
            document.addEventListener('touchend', function upEventCallback() {
              tabRef.current &&
                (tabRef.current.style.transition = 'all 0.5s ease-in');
              if (xDiff > 0) {
                if (
                  checkedDataIndex !== 0 &&
                  xDiff > (window.innerWidth - 40) / 2
                ) {
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
                  xDiff * -1 > (window.innerWidth - 40) / 2
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
              if (
                checkedDataIndex !== 0 &&
                xDiff > (window.innerWidth - 40) / 2
              ) {
                handleCheckedDataIndex(checkedDataIndex, checkedDataIndex - 1);
              } else {
                handleCheckedDataIndex(checkedDataIndex, checkedDataIndex);
              }
            } else {
              if (
                checkedDataIndex + 1 !== menuItemDataArr.length &&
                xDiff * -1 > (window.innerWidth - 40) / 2
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
            <BodyTabWrapperNoPadding>
              <></>
            </BodyTabWrapperNoPadding>
            {menuItemDataArr.map((data, index) => (
              <BodyTabWrapperNoPadding key={data.adId + index}>
                <div className={styles.adBox}>{data.adId}</div>
              </BodyTabWrapperNoPadding>
            ))}
            <BodyTabWrapperNoPadding>
              <></>
            </BodyTabWrapperNoPadding>
          </>
        }
      </div>
    </div>
  );
};

export default SlideMenuAdBodyTab;
