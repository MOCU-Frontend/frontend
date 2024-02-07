import React from 'react';
import SlideMenuFilterBodyTab from '../../atoms/BodyTab/Filter/SlideMenuFilterBodyTab';
import SlideMenuTab from '../../atoms/MenuTab/SlideMenuTab';
import SlideMenuTabBtnText from '../../atoms/Text/TabBtn/SlideMenuTabBtnText';
import styles from './SlideTabViewFilter.module.css';

type FilterList = {
  title: string;
  isChecked: boolean;
};

type MenuItemData = {
  title: string;
  isChecked: boolean;
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
  onClickCompleteBtn: () => void;
}

const SlideTabViewFilter: React.FC<Props> = ({
  menuItemDataArr,
  handleCheckedDataIndex,
  handleClickMenuBodyItem,
  onClickCompleteBtn,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.menuWrapper}>
        <SlideMenuTab
          menuDataArr={menuItemDataArr}
          handleCheckedDataIndex={handleCheckedDataIndex}
        />
        <button onClick={onClickCompleteBtn}>
          <SlideMenuTabBtnText text='완료' />
        </button>
      </div>
      <SlideMenuFilterBodyTab
        menuItemDataArr={menuItemDataArr}
        handleCheckedDataIndex={handleCheckedDataIndex}
        handleClickMenuBodyItem={handleClickMenuBodyItem}
      />
    </div>
  );
};

export default SlideTabViewFilter;
