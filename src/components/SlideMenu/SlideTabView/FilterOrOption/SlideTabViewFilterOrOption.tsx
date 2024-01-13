import React from 'react';
import SlideMenuFilterAndOptionBodyTab from '../../atoms/BodyTab/FilterOrOption/SlideMenuFilterAndOptionBodyTab';
import SlideMenuTab from '../../atoms/MenuTab/SlideMenuTab';
import styles from '../SlideTabView.module.css';

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

const SlideTabViewFilterOrOption: React.FC<Props> = ({
  menuItemDataArr,
  handleCheckedDataIndex,
  handleClickMenuBodyItem,
  handleClickResetOptionBtn,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.menuWrapper}>
        <SlideMenuTab
          menuDataArr={menuItemDataArr}
          handleCheckedDataIndex={handleCheckedDataIndex}
        />
      </div>
      <SlideMenuFilterAndOptionBodyTab
        menuItemDataArr={menuItemDataArr}
        handleCheckedDataIndex={handleCheckedDataIndex}
        handleClickMenuBodyItem={handleClickMenuBodyItem}
        handleClickResetOptionBtn={handleClickResetOptionBtn}
      />
    </div>
  );
};

export default SlideTabViewFilterOrOption;
