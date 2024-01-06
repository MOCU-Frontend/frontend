import React from 'react';
import SlideMenu from '../Menu/SlideMenu';
import styles from './SlideMenuTab.module.css';

type MenuData = {
  title: string;
  isChecked: boolean;
};

interface Props {
  menuDataArr: MenuData[];
  handleCheckedDataIndex: (prevIndex: number, newIndex: number) => void;
}

const SlideMenuTab: React.FC<Props> = ({
  menuDataArr,
  handleCheckedDataIndex,
}: Props) => {
  const handleClickMenu = (clickedIndex: number) => {
    const prevIndex = menuDataArr.findIndex((x) => x.isChecked);
    if (prevIndex !== -1) handleCheckedDataIndex(prevIndex, clickedIndex);
  };
  return (
    <div className={styles.wrapper}>
      {menuDataArr.map((data, index) => (
        <SlideMenu
          key={data.title + index}
          text={data.title}
          isChecked={data.isChecked}
          onClickMenu={() => handleClickMenu(index)}
        />
      ))}
    </div>
  );
};

export default SlideMenuTab;
