import React from 'react';
import SlideMenuBodyTab from '../atoms/BodyTab/SlideMenuBodyTab';
import SlideMenuTab from '../atoms/MenuTab/SlideMenuTab';
import styles from './SlideTabView.module.css';

type MenuItemData = {
  title: string;
  isChecked: boolean;
  content: React.JSX.Element;
};

interface Props {
  menuItemDataArr: MenuItemData[];
  handleCheckedDataIndex: (prevIndex: number, newIndex: number) => void;
}

const SlideTabView: React.FC<Props> = ({
  menuItemDataArr,
  handleCheckedDataIndex,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.menuWrapper}>
        <SlideMenuTab
          menuDataArr={menuItemDataArr}
          handleCheckedDataIndex={handleCheckedDataIndex}
        />
      </div>
      <SlideMenuBodyTab
        tabDataArr={menuItemDataArr}
        handleCheckedDataIndex={handleCheckedDataIndex}
      />
    </div>
  );
};

export default SlideTabView;
